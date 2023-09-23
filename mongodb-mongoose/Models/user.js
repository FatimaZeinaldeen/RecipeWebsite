import mongoose from "mongoose";

const {Schema,model}= mongoose;
const { ObjectId } = mongoose.Types;
const userSchema = new Schema ({
    fullName: {
        type:String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    },
    password: {
        type: String,
        required: true,
        match: /^.{8,}$/
    },
    gender: {
        type: String,
        required: true,
        enum: ["F" , "M"]
    },
    country: String,
    rate: {
        type: Number,
        default: null
    },
    biography: {
        type: String,
        default: null
    },
    userPhoto: String
    
},{
    timestamps: true
});
const User=model("User",userSchema);
export default User;