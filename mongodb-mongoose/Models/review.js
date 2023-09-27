import mongoose from "mongoose";
const {Schema,model}=mongoose;

const reviewSchema = new Schema({
    review:{
        type: String,
        required: true
    },
    userid:{
        type: String,
        ref: "User",
        required: true,
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