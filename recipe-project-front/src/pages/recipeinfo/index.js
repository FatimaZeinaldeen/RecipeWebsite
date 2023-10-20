import React, { useEffect, useState } from "react";
import axios from "axios";
import FeedbackDisplay from '../../Components/FeedbackDisplay/FeedbackDisplay.js';
import Recipe from "../../Components/recipe/info.js";
import { useParams } from "react-router-dom";

const RecipeInfo = () => {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackData, setFeedbackData] = useState([]);
  const recipeId=useParams();
  const fetchRecipe = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/recipe/get-recipe/${recipeId}`);
      setRecipe(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching recipe:", error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchRecipe();

    // Fetch feedback data
    axios.get('http://localhost:3000/About-Us/getAllfeedbacks')
      .then((response) => {
        setFeedbackData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching feedback data:', error);
      });
  });

  

  return (
    <div>
      {isLoading ? (
        <div className="loading-spinner">
          <p>Loading...</p>
        </div>
      ) : (
        <div>
          <Recipe recipe={recipe} />
          <FeedbackDisplay
            feedbackData={feedbackData}
          />
          
        </div>
      )}
    </div>
  );
};

export default RecipeInfo;
