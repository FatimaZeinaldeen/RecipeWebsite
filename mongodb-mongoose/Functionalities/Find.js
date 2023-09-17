import mongoose from "mongoose";
import "../connectDB.js";
import Recipe from "../Models/Recipe.js";

const tempId="123";

const find = async (model, field, value) => {
  try {
    const models = await model.find({ [field]: value });
    return models;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

//example how to use in the project:
// const recipes = await find(Recipe, 'recipe_id', tempId).then(()=>{
//   mongoose.connection.close();   
// });

 //how to display in code:
 // recipes.forEach((recipe) => {
 //   console.log(recipe);
 // });