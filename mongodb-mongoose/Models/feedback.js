import mongoose from "mongoose";
import User from "./user.js";
const {Schema,model}=mongoose;
const { ObjectId } = mongoose.Types;

const feedbackSchema = new Schema({
    feedback: String,
    userid:{
        type: String,
        ref: "User"
    },

    
    
},{
    timestamps: true
});
const feedback=model("feedback",feedbackSchema);
export default feedback;