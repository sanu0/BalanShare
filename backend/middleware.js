const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require("./config");


const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({
            message : "Something went wrong!"
        });
    }

    const token = authHeader.split(' ')[1];
    console.log(token)

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userId = decoded.userId; //This is important part and it helps us later to get the userId from the request itself.
        console.log(decoded)
        
        next();
    } catch (err) {
        console.log(err)
        return res.status(403).json({
            message : "error"
        });
    }
};


module.exports = {
    authMiddleware
}