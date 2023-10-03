import express from "express";
import cloudinary from "cloudinary";
import multer from "multer";
import {
  registerUser,
  login,
  getUser,
  updateProfile,
  userLogout,
  deleteAccount,
} from "../Controllers/userController.js";
import { verifyAdmin } from "../middleware/verifyAdmin.js";

const storage = multer.memoryStorage();
const upload = multer({ storage });
const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});
userRouter.post("/register", upload.single("userPhoto"), registerUser);
userRouter.post("/Login", login);
userRouter.post("/Logout/:id", verifyAdmin, userLogout);
userRouter.get("/profile/:id", verifyAdmin, getUser);
userRouter.delete("/delete-account/:id", deleteAccount);
userRouter.put(
  "/profile/update-profile/:id",
  verifyAdmin,
  upload.single("userPhoto"),
  updateProfile
);
export default userRouter;
