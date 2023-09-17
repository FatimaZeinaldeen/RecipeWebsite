import mongoose from "mongoose";
const {Schema,model}=mongoose; 

export const ingredientSchema = new Schema({
    name: String,
    measurement: Number,
    unit: {
      type: String,
      enum: ["cup/s", "tsp", "tbsp", "L", "mL", "gr", "Kg"]
    }
  });
  const IngredientModel=model("Ingredient",ingredientSchema);
  export default IngredientModel;
  