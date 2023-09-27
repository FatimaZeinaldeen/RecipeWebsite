import express from "express";
import {
    registerUser,
    login,
    getUser,
    updateProfile,
    userLogout,
    deleteAccount
} from "../Controllers/userController.js";
import { verifyAdmin } from "../middleware/verifyAdmin.js";

const userRouter=express.Router();

 userRouter.post("/register",registerUser);
 userRouter.post("/Login",login);
 userRouter.post("/Logout",userLogout);
 userRouter.get("/profile/:id",verifyAdmin,getUser);
 userRouter.delete("/delete-account/:id",verifyAdmin,deleteAccount);
 userRouter.put("/profile/update-profile/:id",verifyAdmin,updateProfile);
 export default userRouter;
