import Recipe from "../Models/Recipe.js";
import review from "../Models/review.js";
import cloudinary from "cloudinary";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

//addRecipe(when posting a recipe by the admin)
export const addRecipe = async (req, res) => {
  const { id } = req.params;
  try {
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.buffer);
      const recipe = new Recipe({
        ...req.body,
        user: id,
        recipePhoto: result.secure_url,
      });
      await recipe.save();
    } else {
      const recipe = new Recipe(req.body);
      console.log(recipe);
      recipe.user = id;
      await recipe.save();
      res.status(201).json( recipe );
    }
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//getAllRecipes
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    const recipeArray = recipes.map((recipe) => recipe.toObject());
    res.status(200).json(recipeArray);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//getSpecificRecipe
export const getRecipe = async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    return res.status(200).json(recipe);
  } catch (error) {
    return res.json({ error: error.message });
  }
};

//updateRecipe(by the Admin)
export const updateRecipe = async (req, res) => {
  const { recipeid } = req.params;
  try {
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.buffer);
      const updated = await Recipe.findByIdAndUpdate(
        recipeid,
        {
          ...req.body,
          recipePhoto: result.secure_url, // Update the recipe photo URL
        },
        { new: true }
      );
    } else {
      const updated = await Recipe.findByIdAndUpdate(recipeid, req.body, {
        new: true,
      });
    }

    if (!updated) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//deleteRecipe
export const deleteRecipe = async (req, res) => {
  const { recipeid } = req.params;
  try {
    const recipetoBeDeleted = await Recipe.findByIdAndDelete(recipeid);
    if (!recipetoBeDeleted) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    res.status(200).json({ message: "Recipe deleted successfully" }); // OR use 204 code <<<res.status(204).end();>>>
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//add a Review
export const addReview = async (req, res) => {
  try {
    const { id } = req.params;
    const Review = new review(req.body);
    Review.userid = id;
    await Review.save();
    res.status(201).json({ message: "Review added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//searchByCategory
export const searchByCategory = async (req, res) => {
  const { category } = req.body;
  try {
    const recipes = await Recipe.find({ category: category });
    const recipeArray = recipes.map((recipe) => recipe.toObject());
    if (recipeArray.length == 0) {
      return res.status(200).json("No recipes from this category");
    }
    res.status(200).json(recipeArray);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//searchByCountry
export const searchByCountry = async (req, res) => {
  const { Country } = req.body;
  try {
    const recipes = await Recipe.find({ Country: Country });
    const recipeArray = recipes.map((recipe) => recipe.toObject());
    if (recipeArray.length == 0) {
      return res.status(200).json("No recipes from this country");
    }
    res.status(200).json(recipeArray);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//get recipe by ingredients
export const getRecipeByIngredients = async (req, res) => {
  try {
    const { ingredients } = req.body;
    const array = ingredients.split(",").map((ingredient) => ingredient.trim());
    const recipes = [];
    for (const ingredient of array) {
      const recipe = await Recipe.find({ "ingredients.name": ingredient });
      recipes.push(...recipe);
    }

    const filtered = filterRecipes(recipes);

    if (filtered.length == 0) {
      return res.status(200).json({ message: "No recipes found" });
    }
    res.status(200).json(filtered);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//200 OK is used when the server successfully processes a request and returns existing data.
//201 Created is used when the server successfully processes a request and creates a new resource as a result.
//204 No Content: The request has been successfully processed, and there is no additional content to send in the response body. used for delete operation but with no including messages like successfully deleted for example, and if you need to include a message use 200
//500 Internal Server Error: A generic server error occurred, indicating that something went wrong on the server.
//404 Not Found: The requested resource could not be found on the server.
function filterRecipes(recipes) {
  const uniqueRecipeIds = new Set();
  const uniqueRecipes = [];

  for (const recipe of recipes) {
    if (!uniqueRecipeIds.has(recipe._id.toString())) {
      uniqueRecipeIds.add(recipe._id.toString());
      uniqueRecipes.push(recipe);
    }
  }

  return uniqueRecipes;
}
