const mongoose = require('mongoose');
 const { Schema } = mongoose;

 const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    ImgUrl:{
            type:String,
            required:true
    },
    category:{type:String,
        required:true
    },
    stockQuantity:{
        type:Number,
        required:true
    },
    description : {
        type:String,

    }
})

module.exports= mongoose.model('Product',productSchema);