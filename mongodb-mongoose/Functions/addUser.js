import User from "../Models/user.js";
import  "../connectDB.js";

const user1=new User({
    fullName:"Fatima Daniella Zainab",
    email: "fatimazeinaldeen18@gmail.com",
    password: 'Fatima123456',
    gender: "F",
    country: "Lebanon"
});
await user1.save();