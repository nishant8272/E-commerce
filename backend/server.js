
const express = require("express")
require('dotenv').config();
const connectDB = require("./db/connection")


const cors = require('cors')

const app = express()
app.use(express.urlencoded({ extended: true }));

app.use(cors())
app.use(express.json())


const auth = require('./middleware/auth')
const userregister = require('./controlers/userController')
const adminregister = require('./controlers/AdminController')



app.post("/userregister", userregister)

app.post("/adminregister", adminregister)

app.listen(3000, async() => {
    console.log("Server is running on port 3000")
    await connectDB()
})
