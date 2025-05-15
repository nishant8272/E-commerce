const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect("mongodb+srv://nishantverma:batman%40123@cluster0.6qqws.mongodb.net/e-commercewebsite")
      console.log("MongoDB connected")
      }

      module.exports = connectDB;