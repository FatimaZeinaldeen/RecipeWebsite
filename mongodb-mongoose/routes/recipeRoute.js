import express from "express";
import {
  addRecipe,
  getAllRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
  addReview,
  getRecipeByIngredients,
  searchByCategory,
  searchByCountry
} from "../Controllers/recipeController.js";
import cloudinary from "cloudinary";
import multer from "multer";
import { verifyAdmin } from "../middleware/verifyAdmin.js";

const storage = multer.memoryStorage();
const upload = multer({ storage })
const recipeRouter = express.Router();

recipeRouter.get("/", (req, res) => {
  res.status(404).json({ error: "Page not found" });
});
recipeRouter.get("/all-recipes", getAllRecipes);
recipeRouter.get("/get-recipe/:id", getRecipe);
recipeRouter.get("/getrecipebyIngredient", getRecipeByIngredients);
recipeRouter.post("/add-review/:id", addReview);
recipeRouter.get("/search-category",searchByCategory);
recipeRouter.get("/search-country",searchByCountry);
recipeRouter.post("/add-recipe/:id", verifyAdmin,upload.single("userPhoto"), addRecipe); //for Admin
recipeRouter.put("/update-recipe/:id", verifyAdmin,upload.single("userPhoto"), updateRecipe); //for Admin
recipeRouter.delete("/delete-recipe/:id", verifyAdmin, deleteRecipe); //for Admin

export default recipeRouter;
