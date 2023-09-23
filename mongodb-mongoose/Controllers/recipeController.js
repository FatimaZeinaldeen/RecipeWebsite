import Recipe from "../Models/Recipe.js"
import review from "../Models/review.js";
//addRecipe(when posting a recipe by the admin)
export const addRecipe=async(req,res)=>{
    try{
        const recipe=new Recipe(req.body);
        await recipe.save(); 
        res.json("successfully added!");
    }catch{
        res.json(error.message);
    }
}

//getAllRecipes
export const getAllRecipes=async (req,res)=>{
  try{
    const recipes= await Recipe.find();
    recipes.forEach((recipe)=>{
        res.json(recipe);
    });
    }catch{
     return res.json(error.message);
    }
}

//getSpecificRecipe
export const getRecipe=async (req,res)=>{
    const { id }=req.params;
  try{
    const recipe= await Recipe.findById(id);
    return res.json(recipe);
    }catch{
     return res.json(error.message);
    }
}

//updateRecipe(by the Admin)
export const updateRecipe=async(req,res)=>{
    const { id }=req.params;
    const {name,category,country,prep_time,serving,photo,chef_note,instructions,ingredients}=req.body;//new values
    try{
        const recipe= await Recipe.findById(id);
        recipe.name=name;
        recipe.category=category;
        recipe.country=country;
        recipe.prep_time=prep_time;
        recipe.serving=serving;
        recipe.photo=photo;
        recipe.chef_note=chef_note;
        recipe.instructions=instructions;
        recipe.ingredients=ingredients;
        
        const updated= await recipe.save();
        res.json(updated);
    }catch{
        res.json(error.message);
    }
}

//deleteRecipe
export const deleteRecipe= async (req,res)=>{
    const { id }=req.params;
    try{
        const recipetoBeDeleted=await Recipe.findByIdAndDelete(id);
        if(!recipetoBeDeleted) return res.json("not found");
        res.json("Recipe deleted successfully");
    }catch{
        res.json(error.message);
    }
}
//add a Review
export const addReview = async (req,res)=>{
    try{
        const Review=new review(req.body);
        await Review.save();
        res.json("Review added successfully");
    }catch{
            res.json(error.message);
    }
}
