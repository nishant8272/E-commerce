const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const registervalidation = require('../middleware/validation');

const admin = require("../db/adminschema")
const adminregister = async (req, res) => {
    console.log(req.body)
    const { name, email, password, role } = req.body
    if (!name || !email || !password || role != "admin") {
        return res.status(400).json({ message: "Please fill in all fields." })
    }
    const existingadmin = await admin.findOne({ email: email })
    if (existingadmin) {
        return res.status(400).json({ message: "admin already exists." })
    }
    const parsed = registervalidation.safeParse(req.body);
    if (!parsed.success) {
        return res.status(400).json({ errors: parsed.error.errors });
    }


    const hashedPassword = bcrypt.hashSync(password, 10)
    const newadmin = new admin({
        name: name,
        email: email,
        password: hashedPassword,});
    await newadmin.save()


    const token = jwt.sign({ email: email,role:role }, process.env.SECRET_KEY)
    res.json({ message: "admin created successfully", TOKEN: token })
}

const getadmin = async (req, res) => {
    try {
        const admin = await admin.find(req.body.email);
        res.json(admin);
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { adminregister, getadmin};
