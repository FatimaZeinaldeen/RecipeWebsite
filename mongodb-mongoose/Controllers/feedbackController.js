import feedback from "../Models/feedback.js";


export const addFeedback= async (req,res)=>{
    try{
        const feedback=new feedback(req.body);
        await feedback.save();
        res.status(201).json({message:"feedback sent"});//status code 201 stands for created; It is typically used to indicate that a new resource has been successfully created as a result of the request
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}