require("dotenv").config();
const twilio = require("twilio");

const { createClient } = require("redis");

// --- Redis Subscriber ---
const subscriber = createClient({url:process.env.REDIS_URL});
subscriber.on("error", (err) => console.error("Redis Client Error", err));

// --- Twilio Client ---

const client = twilio(
  process.env.ACCOUNT_SID,
  process.env.AUTH_TOKEN_TWILIO
);

// --- Helper Function to Send SMS ---
async function sendMessage({ body,to }) {
  try {
    await client.messages.create({
      body,
      from: process.env.TWILIO_PHONE,
      to:to,
    });
    console.log("✅ SMS sent:", body);
  } catch (err) {
    console.error("❌ Failed to send SMS:", err);
  }
}

// --- Run subscriber ---
async function runSubscriber() {
  await subscriber.connect();
  console.log("✅ Redis subscriber connected");

  // Order packed
  await subscriber.subscribe("orderPacked", async (message) => {
    const data = JSON.parse(message);
    console.log("📦 orderPacked Event:", data);
    await sendMessage({
      body: `Your order is packed successfully.\nOrder ID: ${data.orderId}` ,
      to:data.phone// get phone from message
    });
  });

  // Initiate delivery
  await subscriber.subscribe("initiate", async (message) => {
    const data = JSON.parse(message);
    console.log("🚚 initiate Event:", data);
    await sendMessage({
      body: `Your order is on the way.\nOrder ID: ${data.orderId}`,
      to :data.phone
    });
  });

  // Delivered
  await subscriber.subscribe("delivered", async (message) => {
    const data = JSON.parse(message);
    console.log("✅ delivered Event:", data);
    await sendMessage({
      body: `Your order has been delivered successfully.\nOrder ID: ${data.orderId}`,
      to:data.phone
    });
  });
}

// Start the subscriber
runSubscriber().catch((err) => {
  console.error("❌ Failed to start Twilio subscriber:", err);
  process.exit(1);
});
