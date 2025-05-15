const mongoose = require('mongoose');


const { Schema } = mongoose;

const adminSchema = new Schema({
    name: String,
    email: String,
    password: String,
});

const admin  = mongoose.model('admin', adminSchema);

module.exports = admin;
