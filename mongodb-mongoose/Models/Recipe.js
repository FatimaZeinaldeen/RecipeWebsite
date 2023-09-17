import mongoose from "mongoose";
import User from "user.js";
import {ingredientSchema} from "./ingredients.js";
const {Schema,model}=mongoose;

// const IngredientSchema = IngredientModel.Schema;

const recipeSchema= new Schema({
    recipe_id:String,
    name:String,
    category: {
        type: String,
        enum:["Lunch","Breakfast","Dinner","Dessert","Snack","Drinks","Vegan","Salad"]
    },
    user: {
        type: String,
        ref:"User"
    },
    Country:String,
    prep_time:{
        time:Number,
        unit:{
            type:String,
            enum:["min","hour"]
        }
    },
    serving:Number,
    rate: {
        type: Number,
        default: null
    },
    photo:Buffer,//imageBinaryData = fs.readFileSync(imagePath)
    chef_note:{
        type:String,
        default:null
    },
    instructions:[String],
    ingredients:[ingredientSchema]
},{
    timestamps: true
});


const Recipe=model("Recipe",recipeSchema);
export default Recipe;