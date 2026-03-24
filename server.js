import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

//connectDB
import connectDB from './config/connectDB.js';
connectDB();

app.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"Hello from server"
    })
});

//routes
import tutorialRoutes from './routers/tutorialRouter.js';
app.use("/tutorial/api",tutorialRoutes);


app.listen(process.env.PORT || 3000 ,()=>{
    console.log("server running on 5000");
})