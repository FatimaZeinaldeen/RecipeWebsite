import express  from "express";
import { addFeedback } from "../Controllers/feedbackController.js";
import { verifyAdmin } from "../middleware/verifyAdmin.js";

const aboutRouter=express.Router();
aboutRouter.post("/add-feedback/:id",verifyAdmin,addFeedback);
export default aboutRouter;