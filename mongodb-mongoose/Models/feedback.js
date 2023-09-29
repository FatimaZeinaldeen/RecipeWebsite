import mongoose from "mongoose";
import User from "./user.js";
const {Schema,model}=mongoose;

const feedbackSchema = new Schema({
    newfeedback:{
        type: String,
        required: true
      },
    userid:{
        type: String,
        ref: "User",
        required: true
    }
},{
    timestamps: true
});
const feedback=model("feedback",feedbackSchema);
export default feedback;