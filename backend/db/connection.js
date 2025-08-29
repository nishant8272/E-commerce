const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO)
      console.log("MongoDB connected")
      }

      module.exports = connectDB;