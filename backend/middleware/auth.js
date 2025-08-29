const jwt = require('jsonwebtoken');
function auth(req, res, next) {
    const tokens = req.headers.authorization;
    if (!tokens) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }
    const token = tokens.split(" ")[1];
  
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        console.log(decoded)
        req.body.role=decoded.role
        req.body.email=decoded.email
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is invalid' });
    }

}

module.exports = auth;