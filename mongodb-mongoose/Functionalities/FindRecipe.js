import mongoose from "mongoose";
import "../connectDB.js";
import Recipe from "../Models/Recipe.js";
import IngredientModel from "../Models/ingredients.js";

const tempId="123";

Recipe.find({ recipe_id: tempId })
  .then(recipes => {
    if (recipes.length === 0) {
      console.log('Recipe not found');
    } else {
      recipes.forEach(recipe => {
        console.log(recipe);
      });
    }
  })
  .catch(err => {
    console.error(err);
  });