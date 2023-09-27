import express from "express";
import aboutRouter from "./routes/aboutRoute";
import recipeRouter from "./routes/recipeRoute";
import userRouter from "./routes/userRoute";

const Port=3000;
const app=express();

app.use("/User",userRouter);
app.use("/Recipe",recipeRouter);
app.use("/About-Us",aboutRouter);

app.listen(Port,()=>{
    console.log("app Listening");
})