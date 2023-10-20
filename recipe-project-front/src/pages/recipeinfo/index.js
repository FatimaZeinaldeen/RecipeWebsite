import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import FeedbackForm from '../../Components/FeedbackForm/FeedbackForm.js';
import FeedbackDisplay from '../../Components/FeedbackDisplay/FeedbackDisplay.js';
import Recipe from "../../Components/recipe/info.js";

const RecipeInfo = ({ recipeId }) => {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [feedbackData, setFeedbackData] = useState([]);
  const [feedbackData1, setFeedbackData1] = useState([]);

  useEffect(() => {
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

    fetchRecipe();

    // Fetch feedback data
    axios.get('http://localhost:3000/About-Us/getAllfeedbacks')
      .then((response) => {
        setFeedbackData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching feedback data:', error);
      });
  }, [recipeId]);

  const handleFeedbackSubmit = (newFeedback) => {
    const newFeedbackItem = {
      id: feedbackData1.length + 1,
      userPhoto: 'user.jpg',
      userName: 'User', // Replace with the user name from your context or database
      feedbackContent: newFeedback,
    };

    setFeedbackData1([...feedbackData1, newFeedbackItem]);
  };

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
            feedbackData1={feedbackData1}
          />
          <FeedbackForm onFeedbackSubmit={handleFeedbackSubmit} />
        </div>
      )}
    </div>
  );
};

const recipeId = "652057ef5ab2fc582b62b7e1"; // Replace with the actual recipe ID

ReactDOM.render(
  <React.StrictMode>
    <RecipeInfo recipeId={recipeId} />
  </React.StrictMode>,
  document.getElementById("root")
);

export default RecipeInfo;
