import Recipe from "../Models/Recipe.js"
import review from "../Models/review.js";
//addRecipe(when posting a recipe by the admin)
export const addRecipe=async(req,res)=>{
    const {id}=req.params;
    try{
        const recipe=new Recipe(req.body);
        recipe.user=id;
        await recipe.save(); 
        res.status(201).json({ message: "Recipe successfully added", recipe });
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

//getAllRecipes
export const getAllRecipes=async (req,res)=>{
  try{
    const recipes= await Recipe.find();
    recipes.forEach((recipe)=>{
        res.status(200).json(recipes);
    });
    }catch(error){
     return res.status(500).json({erroe: error.message});
    }
}

//getSpecificRecipe
export const getRecipe=async (req,res)=>{
    const { id }=req.params;
  try{
    const recipe= await Recipe.findById(id);
    if (!recipe) {
        return res.status(404).json({ error: "Recipe not found" });
      }
    return res.status(200).json(recipe);
    }catch(error){
     return res.json({error: error.message});
    }
}

//updateRecipe(by the Admin)
export const updateRecipe=async(req,res)=>{
    const { id }=req.params;
    const {name,category,country,prep_time,serving,photo,chef_note,instructions,ingredients}=req.body;//new values
    try{
        const recipe= await Recipe.findById(id);
        if (!recipe) {
            return res.status(404).json({ error: "Recipe not found" });
        }
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
        res.status(200).json(updated);
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

//deleteRecipe
export const deleteRecipe= async (req,res)=>{
    const { id }=req.params;
    try{
        const recipetoBeDeleted=await Recipe.findByIdAndDelete(id);
        if (!recipeToBeDeleted) {
            return res.status(404).json({ error: "Recipe not found" });
        }
        res.status(200).json({message:"Recipe deleted successfully"});// OR use 204 code <<<res.status(204).end();>>>
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}
//add a Review
export const addReview = async (req,res)=>{
    try{
        const Review=new review(req.body);
        await Review.save();
        res.status(201).json({message:"Review added successfully"});
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

//200 OK is used when the server successfully processes a request and returns existing data.
//201 Created is used when the server successfully processes a request and creates a new resource as a result.
//204 No Content: The request has been successfully processed, and there is no additional content to send in the response body. used for delete operation but with no including messages like successfully deleted for example, and if you need to include a message use 200 
//500 Internal Server Error: A generic server error occurred, indicating that something went wrong on the server.
//404 Not Found: The requested resource could not be found on the server.
