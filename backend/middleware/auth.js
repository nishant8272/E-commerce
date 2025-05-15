const jwt = require('jsonwebtoken');
function auth(req, res, next) {
    const token = req.body.token;
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decoded.role)
        req.body.role=decoded.role
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is invalid' });
    }

}

module.exports = auth;