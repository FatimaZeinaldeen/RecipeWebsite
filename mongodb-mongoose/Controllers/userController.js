import User from "../Models/user.js";
import bcrypt from "bcrypt";

//addUser(register)
export const registerUser= async (req,res)=>{
    try{
        const user=new User(req.body);
        await user.save(); 
        res.json("successfully added!");
    }catch{
        res.json(error.message);
    }
}

//login
export const login=async (req,res)=>{
    const {email,password}=req.body;
    try{
        const user=await User.findOne({email});
        if(!user) return res.json("no such account with this email");
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(passwordMatch){
            user.role="admin";
            return res.json("Login successfully!");
        } 
        else{
            return res.json("wrong password");
        }
    }catch{
        res.json(error.message);
    }
}

//getUser
export const getUser=async (req,res)=>{
    const { id }=req.params;
  try{
    const user= await User.findById(id);
    return res.json(user);
    }catch{
     return res.json(error.message);
    }
}

//updateAdminProfile
export const updateProfile= async(req,res)=>{
    const { id }=req.params;
    const {fullName,email,password,gender,country,biography,userPhoto}=req.body;//new values
    try{
        const user= await User.findById(id);
        user.fullName=fullName;
        user.email=email;
        user.password=password;
        user.gender=gender;
        user.country=country;
        user.biography=biography;
        user.userPhoto=userPhoto;

        const updated= await user.save();
        res.json(updated);
    }catch{
        res.json(error.message);
    }
}

//UserLogout
export const userLogout= async (req,res)=>{
    const { id }=req.params;
    try{
        const usertoLogout=await User.findById(id);
        if(!usertoLogout) return res.json("not found");
        user.role="user";
        res.json("User logged out successfully");
    }catch{
        res.json(error.message);
    }
}

//deleteUserAccount
export const deleteAccount= async (req,res)=>{
    const { id }=req.params;
    try{
        const usertoBeDeleted=await User.findByIdAndDelete(id);
        if(!usertoBeDeleted) return res.json("not found");
        res.json("User deleted successfully");
        user.role="user";
    }catch{
        res.json(error.message);
    }
}