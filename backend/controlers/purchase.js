const { product } = require("../db/productSchema")
const { Order } = require("../db/Order")

const User = require("../db/userschema")
const { createClient } = require("redis");

const publisher = createClient();
publisher.on("error", (err) => console.error("Redis Client Error", err));

let isConnected = false;

async function connectPublisher() {
  if (!isConnected) {
    await publisher.connect();
    isConnected = true;
    console.log("✅ Redis publisher connected");
  }
}




async function InitiateOrder(orderId) {
  try {
    // make sure Redis is connected
    await connectPublisher();

    const order = await Order.findOne({ orderId });
    if (!order) throw new Error("Order not found");

    await publisher.publish(
      "initiate",
      JSON.stringify({
        orderId: order.orderId,
        userId: order.userId,
        phone: order.phone,
        status: order.status,
      })
    );

    console.log(`📦 Order ${orderId} event published`);
    return order;
  } catch (err) {
    console.error("❌ Failed to initiate order:", err);
    throw err;
  }
}




async function purchase(req, res) {
  const email = req.body.email;
  const id = req.body.id;
  const user = await User.findOne({ email: email });
  const foundproduct = await product.find({ _id: id });
  if (!foundproduct) {
    return res.json({ msg: "product is not found" })
  }
  const userId = user._id;
  const orderId = parseInt(Math.random() * 100000);
  await Order.create({
    orderId: orderId,
    userId: userId,
    phone: "8272012324",
    status: "initialize"
  })

  InitiateOrder(orderId)
}


module.exports = {
  purchase
}