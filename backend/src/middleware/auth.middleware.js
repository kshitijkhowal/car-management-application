import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.jwt;
    if(!token){
        return res.status(401).json({message:"Unauthorized"});
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        console.log(decoded);
        const user=await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(401).json({message:"Unauthorized"});
        }
        req.user=user;

        next();
    }
    catch(error){
        console.log("Error in auth middleware",error.message);
        return res.status(500).json({message:"toekn not valid"});
    }

};

export default authMiddleware;