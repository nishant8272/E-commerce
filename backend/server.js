
const express = require("express")
require('dotenv').config();
const connectDB = require("./db/connection")
const cookieparser = require('cookie-parser')
// const paymentRouter = require("./controlers/razorpay");


const auth = require('./middleware/auth')
const {userregister,getuser} = require('./controlers/userController')
const {adminregister,getadmin }= require('./controlers/AdminController')
const {products,getProducts,product} = require("./controlers/products")
const cartController = require('./controlers/cartController');
const{ purchase} = require("./controlers/purchase")


const cors = require('cors')


const app = express()
app.use(express.urlencoded({ extended: true }));

app.use(cors())
app.use(cookieparser())
app.use(express.json())



app.post("/adminregister", adminregister)
app.get("/admin",auth,getadmin)


app.post("/userregister", userregister)
app.get("/user",auth,getuser)
app.post("/product",auth,products)
app.get("/product",auth, getProducts)
app.get("/productunique",auth,product)



// Cart routes (protected by auth middleware)
app.post('/api/cart/add', auth, cartController.addToCart);
app.delete('/api/cart/remove', auth, cartController.removeFromCart);
app.put('/api/cart/update/:productId', auth, cartController.updateCartItem);
app.get('/api/cart', auth, cartController.getCart);
app.post("/razorpay",auth,purchase);


app.listen(3000, async() => {
    console.log("Server is running on port 3000")
    await connectDB()
})
