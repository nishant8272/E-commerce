
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const admin = require("../db/adminschema")
const adminregister =(req, res) => {
    console.log(req.body)
    const { name, email, password,role } = req.body
    if (!name || !email || !password || role != "admin") {
        return res.status(400).json({ message: "Please fill in all fields." })
    }

    const hashedPassword = bcrypt.hashSync(password, 10)
    const newadmin = new admin({
        name: name,
        email: email,
        password: hashedPassword,
    })
    newadmin.save()


    const token = jwt.sign({ email: email }, process.env.SECRET_KEY)
    res.json({ message: "admin created successfully" ,TOKEN: token})
}

module.exports = adminregister;
