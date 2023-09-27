import express from "express";
import connectdb from "./config/connectDB.js";
import aboutRouter from "./routes/aboutRoute.js";
import recipeRouter from "./routes/recipeRoute.js";
import userRouter from "./routes/userRoute.js";

const Port=3000;
const app=express();
connectdb(process.env.connectionString);

app.use("/User",userRouter);
app.use("/Recipe",recipeRouter);
app.use("/About-Us",aboutRouter);

app.listen(Port,()=>{
    console.log("app Listening");
})