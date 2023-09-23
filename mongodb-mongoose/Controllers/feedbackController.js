import feedback from "../Models/feedback.js";


export const addFeedback= async (req,res)=>{
    try{
        const feedback=new feedback(req.body);
        await feedback.save();
        res.json("feedback send");
    }catch{
        res.json(error.message);
    }
}