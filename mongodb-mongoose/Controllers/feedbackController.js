import feedback from "../Models/feedback.js";
import User from "../Models/user.js"


export const addFeedback= async (req,res)=>{
    const {newfeedback}=req.body;
    const {id}=req.params;
    try{
        
        console.log(newfeedback);
        console.log(id);
        const user= await User.find({id:id});
        const username=user.fullName;
        const userphoto=user.userPhoto;
        const feedback1=new feedback({
            username:username,
            userPhoto:userphoto,
            newfeedback:newfeedback,
            userid:id,
        });
        await feedback1.save();
        res.status(201).json({message:"feedback sent"});//status code 201 stands for created; It is typically used to indicate that a new resource has been successfully created as a result of the request
    }catch(error){
        res.status(500).json({ error: error.message });
    }
};
export const getAllfeedbacks = async (req, res) => {
    try {
      const feedbacks = await feedback.find();
      const feedbacksArray = feedbacks.map((feedback) => feedback.toObject());
      res.status(200).json(feedbacksArray);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  };