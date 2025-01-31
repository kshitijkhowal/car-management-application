import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/db/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./src/routes/auth.route.js";
import carRouter from "./src/routes/car.route.js";


dotenv.config();

const app=express();
const port=process.env.PORT;


app.use(express.json());
app.use(cookieParser());

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))

app.use("/api/auth",authRouter);
app.use("/api/car",carRouter);

app.listen(port,()=>{
    console.log(`Server is running on port ${port} successfully.`);
    connectDB();
})