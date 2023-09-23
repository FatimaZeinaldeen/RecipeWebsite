import "../config/connectDB.js";
import feedback from "../Models/feedback.js"

const feedback1= new feedback({
    feedback:"Your website is awesome!",
    userid:"1234"
});
await feedback1.save();