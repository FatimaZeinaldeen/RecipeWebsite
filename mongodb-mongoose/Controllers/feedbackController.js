import feedback from "../Models/feedback.js";


export const addFeedback= async (req,res)=>{
    const {newfeedback}=req.body;
    const {userid}=req.params;
    try{
        
        console.log(newfeedback);
        const feedback1=new feedback({
            feedback:newfeedback,
            userid:userid
        });
        await feedback1.save();
        res.status(201).json({message:"feedback sent"});//status code 201 stands for created; It is typically used to indicate that a new resource has been successfully created as a result of the request
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}