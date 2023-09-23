import express from "express";
import {
    registerUser,
    login,
    getUser,
    updateProfile,
    userLogout,
    deleteAccount
} from "../Controllers/userController.js";
import { addFeedback } from "../Controllers/feedbackController.js";
import { verifyAdmin } from "../middleware/verifyAdmin.js";

const router=express.Router();

 router.post("/register",registerUser);
 router.post("/Login",login);
 router.post("/Logout",userLogout);
 router.put("/profile/:id",verifyAdmin,updateProfile);
 router.delete("/delete-account/:id",verifyAdmin,deleteAccount);
 router.post("/aboutus/:id",addFeedback);
 //router.get("/profile/:id",getUser);
 export default router;


