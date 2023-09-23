import mongoose from "mongoose";
const {Schema,model}=mongoose;

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