import "../connectDB.js";
import User  from "../Models/user.js";
import review from "../Models/review.js";

const review1= new review ({
    review: "This recipe is disgusting!!",
    userid:"1234",
    rate:3
});
await review1.save();