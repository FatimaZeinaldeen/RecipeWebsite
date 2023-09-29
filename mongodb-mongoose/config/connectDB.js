import mongoose from "mongoose";

const connectdb = async (dbURL) => {
  try {
    await mongoose.connect(dbURL).then(
      () => console.log("connected successfully..."),
      (err) => console.log("connection error", err)
    );
  } catch (error) {
    console.log(error);
  }
};
export default connectdb;