import express from "express";
import {
  addRecipe,
  getAllRecipes,
  getRecipe,
  updateRecipe,
  deleteRecipe,
  addReview,
  getRecipeByIngredients
} from "../Controllers/recipeController.js";
import cloudinary from "cloudinary";
import multer from "multer";
import { verifyAdmin } from "../middleware/verifyAdmin.js";
import Recipe from "../Models/Recipe.js";
import mongoose from "mongoose";

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
recipeRouter.post("/add-recipe/:id", verifyAdmin,upload.single("userPhoto"), addRecipe); //for Admin
recipeRouter.put("/update-recipe/:id", verifyAdmin,upload.single("userPhoto"), updateRecipe); //for Admin
recipeRouter.delete("/delete-recipe/:id", verifyAdmin, deleteRecipe); //for Admin
recipeRouter.post('/like-recipe/:recipeId', async (req, res) => {
  const { recipeId } = req.params;
  console.log('Received like request for recipe ID:', recipeId);

  try {
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    recipe.likes += 1;
    const updatedRecipe = await recipe.save();

    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ message:"hello erroe" });
  }
});
recipeRouter.post('/unlike-recipe/:recipeId', async (req, res) => {
  const { recipeId } = req.params;
  
  console.log('Received un-like request for recipe ID:', recipeId);

  try {
    const recipe = await Recipe.findById(recipeId);

    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }
    if (recipe.likes > 0) {
      recipe.likes -= 1;
    }

    const updatedRecipe = await recipe.save();
    res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default recipeRouter;
