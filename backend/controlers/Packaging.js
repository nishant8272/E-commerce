// Packaging.js
require("dotenv").config(); // Load .env variables
const mongoose = require("mongoose");
const { createClient } = require("redis");
const { Order } = require("../db/Order.js"); // Adjust path if needed

// --- Redis Clients ---
const publisher = createClient();
const subscriber = createClient();

publisher.on("error", (err) => console.error("Redis Publisher Error", err));
subscriber.on("error", (err) => console.error("Redis Subscriber Error", err));

// --- MongoDB Connection ---
async function connectMongo() {
  try {
    await mongoose.connect(process.env.MONGO||"mongodb+srv://nishantverma:batman%40123@cluster0.6qqws.mongodb.net/e-commercewebsite", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err);
    process.exit(1);
  }
}

// --- Package Order Function ---
async function packageOrder(orderId) {
  try {
    const order = await Order.findOne({ orderId });
    if (!order) throw new Error("Order not found");

    order.status = "packed";
    await order.save();

    await publisher.publish(
      "orderPacked",
      JSON.stringify({
        orderId: order.orderId,
        userId: order.userId,
        phone: order.phone,
        status: order.status,
      })
    );

    console.log(`📦 Order ${orderId} marked as packed & event published`);
    return order;
  } catch (err) {
    console.error("❌ Failed to package order:", err);
    throw err;
  }
}

// --- Run Service ---
async function run() {
  // 0️⃣ Connect MongoDB
  await connectMongo();

  // 1️⃣ Connect Redis clients
  await publisher.connect();
  console.log("✅ Redis publisher connected");

  await subscriber.connect();
  console.log("✅ Redis subscriber connected");

  // 2️⃣ Subscribe to 'initiate' channel
  await subscriber.subscribe("initiate", async (message) => {
    try {
      const data = JSON.parse(message);
      console.log("🟢 Initiate event received:", data);

      if (!data.orderId) {
        console.warn("⚠️ initiate event missing orderId");
        return;
      }

      await packageOrder(data.orderId);
    } catch (err) {
      console.error("❌ Failed to handle initiate event:", err);
    }
  });

  console.log("🚀 Order service is running and listening for 'initiate' events...");
}

// Start the service
run().catch((err) => {
  console.error("❌ Failed to start order service:", err);
  process.exit(1);
});
