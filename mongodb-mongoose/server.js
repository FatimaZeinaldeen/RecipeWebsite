import express from "express";
import connectdb from "./config/connectDB.js";
import aboutRouter from "./routes/aboutRoute.js";
import recipeRouter from "./routes/recipeRoute.js";
import userRouter from "./routes/userRoute.js";
import dotenv from "dotenv";
dotenv.config();

const Port = process.env.PORT || 3000;
const app = express();
app.use(express.json());

connectdb(process.env.MONGODB_URI);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/User", userRouter);
app.use("/Recipe", recipeRouter);
app.use("/About-Us", aboutRouter);

app.listen(Port, () => {
  console.log(`App is listening on http://localhost:${Port}`);
});