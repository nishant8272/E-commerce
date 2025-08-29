require("dotenv").config();
const {mongoose} = require("mongoose")
const { Order } = require("../db/Order.js");
const { createClient } = require("redis");


// --- Redis Clients ---
const publisher = createClient({url:process.env.REDIS_URL});
const subscriber = createClient({url:process.env.REDIS_URL});

publisher.on("error", (err) => console.error("Redis Publisher Error", err));
subscriber.on("error", (err) => console.error("Redis Subscriber Error", err));

async function connectMongo() {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err);
    process.exit(1);
  }
}

// --- Connect Redis Clients ---
async function connectRedis() {
  await publisher.connect();
  console.log("✅ Redis publisher connected");
  await subscriber.connect();
  console.log("✅ Redis subscriber connected");
}


// --- Deliver Order Function ---
async function deliverOrder(orderId) {
  try {
    const order = await Order.findOne({ orderId });
    if (!order) throw new Error("Order not found");

    order.status = "delivered";
    await order.save();

    await publisher.publish(
      "delivered",
      JSON.stringify({
        orderId: order.orderId,
        userId: order.userId,
        phone: order.phone,
        status: order.status,
      })
    );

    console.log(`📦 Order ${orderId} marked as delivered & event published`);
    return order;
  } catch (err) {
    console.error("❌ Failed to deliver order:", err);
    throw err;
  }
}

// --- Subscribe to startDelivery Channel ---
async function subscribeToDelivery() {
  await subscriber.subscribe("orderPacked", async (message) => {
    try {
      const data = JSON.parse(message); // expects { orderId: "..." }
      console.log("🟢 StartDelivery event received:", data);

      if (!data.orderId) {
        console.warn("⚠️ startDelivery event missing orderId");
        return;
      }

      await deliverOrder(data.orderId);
    } catch (err) {
      console.error("❌ Failed to handle startDelivery event:", err);
    }
  });
}

// --- Run server ---
async function run() {
  await connectMongo();
  await connectRedis();
  await subscribeToDelivery();
  console.log("🚀 Delivery service is running and listening for 'startDelivery' events...");
}

// Start the service
run().catch((err) => {
  console.error("❌ Failed to start delivery service:", err);
  process.exit(1);
});
