import React, { useState } from 'react';
import PropTypes from "prop-types";
import recipePhoto from "../../assets/photos/PastaPesto.jpg";
import styles from "./recipe.module.css";
import { useNavigate } from 'react-router-dom';


const Recipe = ({ recipe }) => {
  const [showSecondSVGIngredients, setShowSecondSVGIngredients] = useState([]);
  const [showSecondSVGInstructions, setShowSecondSVGInstructions] = useState([]);

  const navigate = useNavigate();

  const toggleSVG = (index, section) => {
    if (section === 'ingredients') {
      const updatedSVGState = [...showSecondSVGIngredients];
      updatedSVGState[index] = !updatedSVGState[index];
      setShowSecondSVGIngredients(updatedSVGState);
    } else {
      const updatedSVGState = [...showSecondSVGInstructions];
      updatedSVGState[index] = !updatedSVGState[index];
      setShowSecondSVGInstructions(updatedSVGState);
    }
  };

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className={styles.recipeInfo}>
      <div className={styles.leftColumn}>
        <img src={recipePhoto} alt="recipeimg" className={styles.photo} />
        <div className={styles.info}>
        <div>
        <h3 className={styles.title}>Ingredients</h3>
<ul>
  {recipe.ingredients && recipe.ingredients.length > 0 ? (
    recipe.ingredients.map((ingredient, index) => (
      <div key={index} className={styles.ingredientbox}>
        <div className={styles.transparentbox}></div>
        <div onClick={() => toggleSVG(index, 'ingredients')}>
          {showSecondSVGIngredients[index] ? (
            <span className={styles.svg} >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#ffa101" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </span>
          ) : (
            <span className={styles.svg}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#ffa101" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q-1.35-1.35-3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q-1.35-1.35-2.138-3.175T22 12q0-2.075-.788-3.9t-2.137-3.175q-1.35-1.35-3.175-2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0-3.35 2.325 5.675T12 20Zm0-8Z" />
              </svg>
            </span>
          )}
        </div>
        <span className={styles.ingname}>{ingredient.name}</span>
        <span className={styles.measurement}>{ingredient.measurement}</span>
        <span className={styles.unit}>{ingredient.unit}</span>
      </div>
    ))
  ) : <p>No ingredients available.</p>}
</ul>
</div>

          <span className={styles.serving}>Servings: </span>
          <span className={styles.servingContent}>{recipe.serving || 'N/A'} </span>
          <span className={styles.serving}> /recipe </span>
          
        </div>
        <button className={styles.button} onClick={() => navigate(`/user/${recipe.user}`)}>Check out this chef's other recipes</button>
      </div>
      <div className={styles.rightColumn}>
        <h2 className={styles.maintitle}>{recipe.name || 'Recipe Name Unavailable'}</h2>
        <h3 className={styles.phrase}> It's  {recipe.category  || 'Category Unavailable'}  time!</h3>
        <span className={styles.origin}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="#ffa101" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm0 18l2-2l1-1v-2h-2v-1l-1-1H9v3l2 2v1.931C7.06 19.436 4 16.072 4 12l1 1h2v-2h2l3-3V6h-2L9 5v-.411a7.945 7.945 0 0 1 6 0V6l-1 1v2l1 1l3.13-3.13A7.983 7.983 0 0 1 19.736 10H18l-2 2v2l1 1h2l.286.286C18.029 18.061 15.239 20 12 20z"/></svg>
        <span>{recipe.Country}</span>
        </span>
        <span className={styles.timee}>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
            <path fill="#ffa101" d="M10 3.018a.75.75 0 1 1 0-1.5h3.536a.75.75 0 0 1 0 1.5H10Zm-3.47.452a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM12 5.75A7.25 7.25 0 1 0 19.25 13a.75.75 0 1 1 1.5 0A8.75 8.75 0 1 1 12 4.25a.75.75 0 0 1 0 1.5Z"/>
            <path fill="#ffa101" d="M17.188 8.364a.75.75 0 0 0-1.052-1.052l-3.17 2.465l-2.072 1.48a1.684 1.684 0 1 0 2.35 2.349l-1.479-2.072l-2.465-3.17Z"/>
          </svg>
          {recipe.prep_time && recipe.prep_time.time && recipe.prep_time.unit ? (
            <span className={styles.time}>{recipe.prep_time.time} {recipe.prep_time.unit}</span>
          ) : (
            <span className={styles.time}>Time information not available</span>
          )}
        </span>
        <span className={styles.likes}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 26 26"><path fill="#ffa101" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z"/></svg>
          <span className={styles.like}>{recipe.likes || 0}</span>
        </span>
        <div className={styles.half}>
        <h3 className={styles.title}>Instructions</h3>
{recipe.instructions && recipe.instructions.length > 0 ? (
  <div className={styles.instructionsList}>
    {recipe.instructions.map((instruction, index) => (
      <div key={index} className={styles.instructionItem}>
        <div onClick={() => toggleSVG(index, 'instructions')}>
          {showSecondSVGInstructions[index] ? (
            <span className={styles.svg2}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="#ffa101" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </span>
          ) : (
            <span className={styles.svg2}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="#ffa101" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q-1.35-1.35-2.138-3.175T22 12q0-2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175-2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0-3.35 2.325 5.675T12 20Zm0-8Z" />
              </svg>
            </span>
          )}
        </div>
        {instruction}
      </div>
    ))}
  </div>
) : (
  <p>No instructions available.</p>
)}


</div>

        {recipe.chef_note && (
          <div className={styles.chefNoteContainer}>
            <p className={styles.NoteTitle}>Chef's Note:</p>
            <div className={styles.NoteContent}>{recipe.chef_note}</div>
          </div>
          
        )}<div className={styles.rightColumn}>
          

      </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default Recipe;
