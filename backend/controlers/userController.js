const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../db/userschema')

const userregister= (req, res) => {
    console.log(req.body)
    const { name, email, password,role } = req.body
    if (!name || !email || !password || role != "user") {
        return res.status(400).json({ message: "Please fill in all fields." })
    }

    hashedPassword = bcrypt.hashSync(password, 10)

    const newuser = new User({
        name: name,
        email: email,
        password: hashedPassword
    })
    newuser.save()
    const token = jwt.sign({ email: email }, process.env.SECRET_KEY)
    res.json({ message: "User created successfully" ,TOKEN: token})
}

module.exports = userregister;