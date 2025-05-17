const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../db/userschema')
const registervalidation= require("../middleware/validation")

const userregister= async(req, res) => {
    const { name, email, password,role } = req.body
    if (!name || !email || !password || role != "user") {
        return res.status(400).json({ message: "Please fill in all fields." })
    }
    const existinguser = await User.findOne({ email: email })
    if (existinguser) {
        return res.status(400).json({ message: "User already exists." })
    }
    const parsed = registervalidation.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ errors: parsed.error.errors });
    }

    hashedPassword = bcrypt.hashSync(password, 10)

    const newuser = new User({
        name: name,
        email: email,
        password: hashedPassword
    })
    await newuser.save()
    const token = jwt.sign({ email: email ,role:role }, process.env.SECRET_KEY)
    res.json({ message: "User created successfully" ,TOKEN: token})
}

const getuser = async (req, res) => {
    try {
        const user = await User.find(req.body.email);
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


module.exports ={ userregister, getuser};