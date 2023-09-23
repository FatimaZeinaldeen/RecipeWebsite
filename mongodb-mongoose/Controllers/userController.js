import User from "../Models/user.js";

export const addUser= async (req,res)=>{
    try{
        const user=new User(req.body);
        await user.save(); 
        res.json("successfully added!");
    }catch{
        res.json("ERROR");
    }
}
// export const getUser=async (req,res)=>{
//     try{
//         const { user_id }
//     }
// }