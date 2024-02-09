import Jwt from "jsonwebtoken";

import User from "../models/user.model.js";


const protectRoute = async (req, res, next)=>{
    try {
        const token = req.cookies.Jwt;
        if(!token){
            return res.status(401).json({error: "Token not recognized"})
            
        }
        const decode = Jwt.verify(token, process.env.JWT_SECRET)

        if(!decode){
            return res.status(401).json({ error:"Invalid Token!" })
        }
        const user = await  User.findById(decode.id).select("-password");
        if(!user){
            return res.status(401).json({ error:"User not found!" })

        }


        req.user =  user;
        next();
    } catch (error) {
        console.log(error.message)
        res.status(500).json({error: "internal server error"})
    }
}


export default protectRoute;