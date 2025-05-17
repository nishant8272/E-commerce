const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String
});

// Check if the model exists before compiling
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
