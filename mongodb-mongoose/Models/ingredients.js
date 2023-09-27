import mongoose from "mongoose";
const {Schema,model}=mongoose; 

export const ingredientSchema = new Schema({
    name: {
      type:String,
      required: true
    },
    measurement: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      required: true,
      enum: ["cup/s", "tsp", "tbsp", "L", "mL", "gr", "Kg"]
    }
  });
  const IngredientModel=model("Ingredient",ingredientSchema);
  export default IngredientModel;
  