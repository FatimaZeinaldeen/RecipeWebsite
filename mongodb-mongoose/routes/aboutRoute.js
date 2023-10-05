import express from "express";
import { addFeedback, getAllfeedbacks } from "../Controllers/feedbackController.js";
import { verifyAdmin } from "../middleware/verifyAdmin.js";

const aboutRouter = express.Router();

// aboutRouter.get("/", (req, res) => {
//   res.status(404).json({ error: "Page not found" });
// });
aboutRouter.post("/add-feedback/:id", verifyAdmin, addFeedback);
aboutRouter.get("/getAllfeedbacks", getAllfeedbacks);
export default aboutRouter;
