import User from "../Models/user.js";

//addUser
export const addUser= async (req,res)=>{
    try{
        const user=new User(req.body);
        await user.save(); 
        res.json("successfully added!");
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

//deleteUser(Logout)
export const deleteUser= async (req,res)=>{
    const { id }=req.params;
    try{
        const usertoBeDeleted=await User.findByIdAndDelete(id);
        if(!usertoBeDeleted) return res.json("not found");
        res.json("User deleted successfully");
    }catch{
        res.json(error.message);
    }
}