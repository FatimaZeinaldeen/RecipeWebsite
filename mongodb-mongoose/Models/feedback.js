import mongoose from "mongoose";
import User from "./user.js";
const {Schema,model}=mongoose;
const { ObjectId } = mongoose.Types;

const feedbackSchema = new Schema({
    feedback:{
        type: String,
        //required: true
      },
    userid:{
        type: String,
        ref: "User",
        //required: true
    }
},{
    timestamps: true
});
const feedback=model("feedback",feedbackSchema);
export default feedback;