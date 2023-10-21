import React, { useEffect, useState } from "react";
import axios from "axios";

import Recipe from "../../Components/recipe/info.js";

import { useParams } from "react-router-dom";
const RecipeInfo = () => {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const {id} = useParams();

  const fetchRecipe = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/recipe/get-recipe/${id}`);
      console.log(response.data); // Log the API response
      setRecipe(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching recipe:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipe();
  });

  return (
    <div>
      {isLoading ? (
        <div className="loading-spinner">
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          {recipe ? (
            <Recipe recipe={recipe} />
          ) : (
            <p>Recipe not found</p>
          )}
          {/* Add your FeedbackDisplay component here */}
        </div>
      )}
    </div>
  );
};

export default RecipeInfo;
