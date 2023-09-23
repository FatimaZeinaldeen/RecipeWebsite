import Recipe from "../Models/Recipe.js"

//addRecipe(when posting a recipe by the admin)
export const addRecipe=async(req,res)=>{
    try{
        const recipe=new Recipe(req.body);
        await recipe.save(); 
        res.json("successfully added!");
    }catch{
        res.json("ERROR");
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
    const { recipe_id }=req.params;
  try{
    const recipe= await Recipe.findById(recipe_id);
    return res.json(recipe);
    }catch{
     return res.json("Recipe not found");
    }
}

//updateRecipe(by the Admin)
export const updateRecipe=async(req,res)=>{
    const { recipe_id }=req.params;
    const {name,category,country,prep_time,serving,photo,chef_note,instructions,ingredients}=req.body;//new values
    try{
        const recipe= await Recipe.findById(recipe_id);
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
    const { recipe_id }=req.params;
    try{
        const recipetoBeDeleted=await Recipe.findByIdAndDelete(recipe_id);
        if(!recipetoBeDeleted) return res.json("not found");
        res.json("Recipe deleted successfully");
    }catch{
        res.json(error.message);
    }
}


