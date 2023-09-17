import mongoose from "mongoose";
import User from "./user.js";
const {Schema,model}=mongoose;
const { ObjectId } = mongoose.Types;

const reviewSchema = new Schema({
    review: String,
    userid:{
        type: String,
        ref: "User"
    },
   
    rate: {
        type: Number,
        default: null
    },
},{
    timestamps: true
});
const review=model("review",reviewSchema);
export default review;