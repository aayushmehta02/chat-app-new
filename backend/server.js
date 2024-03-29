//package imports
import dotenv from "dotenv";
import express from "express";
//file imports
import cookieParser from "cookie-parser";
import connectToMongoDB from "./db/connectToMongoDB.js";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";


//variables
const app = express()
const PORT  = process.env.PORT || 5000;
app.use(express.json())

dotenv.config()
app.use(cookieParser());
app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)
app.get("/", (req,res)=>{
    res.send("server is not ready")
})

app.listen(5000, ()=> {
    connectToMongoDB();
    console.log(`server running on port ${PORT}`)
})