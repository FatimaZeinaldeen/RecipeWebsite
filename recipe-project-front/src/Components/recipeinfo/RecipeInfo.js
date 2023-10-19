// src/components/RecipeInfo.js

import React from "react";
import PropTypes from "prop-types";
import styles from "./recipeinfo.module.css";

const RecipeInfo = ({ recipe }) => {
  return (
    <div className={styles.recipeInfo}>
      <h2>{recipe.name}</h2>
      <p>Category: {recipe.category}</p>
      <p>Country of Origin: {recipe.Country}</p>
      <p>Prep Time: {recipe.prep_time.time} {recipe.prep_time.unit}</p>
      <p>Serving: {recipe.serving}</p>
      <p>Likes: {recipe.likes}</p>
      {recipe.chef_note && <p>Chef's Note: {recipe.chef_note}</p>}

      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.name}: {ingredient.amount}</li>
        ))}
      </ul>

      <h3>Instructions</h3>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

RecipeInfo.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default RecipeInfo;
