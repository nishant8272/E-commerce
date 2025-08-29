const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
  orderId: String,
  userId: String,
  phone: String,
  status: {type:String, enum:["packed","startDelivery","delivered","initialize"],required:true}
});

const Order = mongoose.model("Order", orderSchema);
module.exports={
  Order
}
