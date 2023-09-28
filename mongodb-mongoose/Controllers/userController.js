import User from "../Models/user.js";
import bcrypt from "bcrypt";

//addUser(register)
export const registerUser= async (req,res)=>{
    try{
        const { role, fullName, email, password, gender, country, rate, biography, userPhoto } = req.body;
        const user = new User({
            role,
            fullName,
            email,
            password,
            gender,
            country,
            rate,
            biography,
            userPhoto
        });
        await user.save(); 
        res.status(201).json({message:"successfully added!"});
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

//login
export const login=async (req,res)=>{
    const {email}=req.body;
    const {password}=req.body;
    try{
         const user=await User.findOne(email);
         console.log(user);
         if (!user) {
             return res.status(404).json({ error: "No such account with this email" });
     }
         const passwordMatch = await bcrypt.compare(password, user.password);
         if(passwordMatch){
             user.role="admin";
             return res.status(200).json({ message: "Login successful" });
         } 
         else{
             return res.status(401).json("Wrong password");
         }
     }catch(error){
         res.status(500).json({error:error.message});
     }
    
}

//getUser
export const getUser=async (req,res)=>{
    const { id }=req.params;
  try{
    const user= await User.findById(id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json(user);
    }catch(error){
     return res.status(500).json({error:error.message});
    }
}

//updateAdminProfile
export const updateProfile= async(req,res)=>{
    const { id }=req.params;
    const {fullName,email,password,gender,country,biography,userPhoto}=req.body;//new values
    try{
        const user= await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        user.fullName=fullName;
        user.email=email;
        user.password=password;
        user.gender=gender;
        user.country=country;
        user.biography=biography;
        user.userPhoto=userPhoto;

        const updated= await user.save();
        res.status(200).json(updated);
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

//UserLogout
export const userLogout= async (req,res)=>{
    const { id }=req.params;
    try{
        const usertoLogout=await User.findById(id);
        if (!userToLogout) {
            return res.status(404).json({ error: "User not found" });
        }
        user.role="user";
        res.status(200).json({message:"User logged out successfully"});
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

//deleteUserAccount
export const deleteAccount= async (req,res)=>{
    const { id }=req.params;
    console.log("Received ID:", id);
    try{
        const usertoBeDeleted= await User.findByIdAndDelete(id);
        console.log(usertoBeDeleted);
        if (!usertoBeDeleted) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
        //usertoBeDeleted.role="user";
    }catch(error){
        res.status(500).json({ error: "error in the server" });
    }
}


//The 401 status code is used to indicate that the client's request lacks proper authorization, and access to the requested resource is denied due to authentication failure.