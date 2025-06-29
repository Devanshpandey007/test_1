const jwt = require("jsonwebtoken");
module.exports = (req,res,next) =>{
    const authHeader = req.header("Authorization");
    if(!authHeader){
        return res.status(401).json({message: "No token provided"});
    }
    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }
    try {
        // this will verify the token and if it matches then we will extract the user id from it
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.id;
        next();
    }catch(err){
        res.status(401).json({"message": "Invalid token"});
    }
};