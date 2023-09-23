import express from "express";
import{
    addRecipe,
    getAllRecipes,
    getRecipe,
    updateRecipe,
    deleteRecipe,
    addReview
} from "../Controllers/recipeController.js";
import { verifyAdmin } from "../middleware/verifyAdmin.js";

const router=express.Router();


router.get("/recipes",getAllRecipes);
router.post("/recipe/:id",addReview);
router.get("/recipe/:id",getRecipe);
router.post("/recipe",verifyAdmin,addRecipe);//for Admin
router.put("/recipe/:id",verifyAdmin,updateRecipe);//for Admin
router.delete("/recipe/:id",verifyAdmin,deleteRecipe);//for Admin
