import mongoose from "mongoose";
import User from "./user.js";
import {ingredientSchema} from "./ingredients.js";
const {Schema,model}=mongoose;

// const IngredientSchema = IngredientModel.Schema;

const recipeSchema= new Schema({
    name: {
        type:String,
        required:true
    },
    category: {
        type: String,
        enum:["Lunch","Breakfast","Dinner","Dessert","Snack","Drinks","Vegan","Salad","slices","pieces"]
    },
    user: {
        type: String,
        ref:"User"
    },
    Country:{
        type:String,
        required: true
    },
    prep_time:{
        time:Number,
        unit:{
            type:String,
            enum:["min","hour"]
        }
    },
    serving:{
        type:Number
    },
    likes: {
        type: Number,
        default: 0
    },
    photo:String,
    chef_note:{
        type:String,
        default:null
    },
    instructions: [String],
    ingredients: [ingredientSchema],
},{timestamps: true});


const Recipe=model("Recipe",recipeSchema);
export default Recipe;