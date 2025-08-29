require("dotenv").config();
const twilio = require("twilio");

const { createClient } = require("redis");

// --- Redis Subscriber ---
const subscriber = createClient();
subscriber.on("error", (err) => console.error("Redis Client Error", err));

// --- Twilio Client ---
console.log("ACCOUNT_SID:", process.env.ACCOUNT_SID);
console.log("AUTH_TOKEN_TWILIO:", process.env.AUTH_TOKEN_TWILIO ? "OK" : "MISSING");
console.log("TWILIO_PHONE:", process.env.TWILIO_PHONE);

const client = twilio(
  process.env.ACCOUNT_SID,
  process.env.AUTH_TOKEN_TWILIO
);

// --- Helper Function to Send SMS ---
async function sendMessage({ body }) {
  try {
    await client.messages.create({
      body,
      from: process.env.TWILIO_PHONE,
      to:"+918272012324",
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
      body: `Your order is packed successfully.\nOrder ID: ${data.orderId}` // get phone from message
    });
  });

  // Initiate delivery
  await subscriber.subscribe("initiate", async (message) => {
    const data = JSON.parse(message);
    console.log("🚚 initiate Event:", data);
    await sendMessage({
      body: `Your order is on the way.\nOrder ID: ${data.orderId}`
    });
  });

  // Delivered
  await subscriber.subscribe("delivered", async (message) => {
    const data = JSON.parse(message);
    console.log("✅ delivered Event:", data);
    await sendMessage({
      body: `Your order has been delivered successfully.\nOrder ID: ${data.orderId}`
    });
  });
}

// Start the subscriber
runSubscriber().catch((err) => {
  console.error("❌ Failed to start Twilio subscriber:", err);
  process.exit(1);
});
