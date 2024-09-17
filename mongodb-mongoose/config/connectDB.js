import mongoose from "mongoose";

const connectdb = async ('mongodb+srv://FatimaZeinaldeen:FatimaKassemZeinaldeen@cluster0.pxrudjw.mongodb.net/RecipeDB') => {
  try {
    await mongoose.connect('mongodb+srv://FatimaZeinaldeen:FatimaKassemZeinaldeen@cluster0.pxrudjw.mongodb.net/RecipeDB').then(
      () => console.log("connected successfully..."),
      (err) => console.log("connection error", err)
    );
  } catch (error) {
    console.log(error);
  }
};
export default connectdb;
