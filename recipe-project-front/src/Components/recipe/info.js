import React, { useState } from "react";
import PropTypes from "prop-types";
import recipePhoto from "../../assets/photos/PastaPesto.jpg";
import styles from "./recipe.module.css";
import { useNavigate } from "react-router-dom";

const Recipe = ({ recipe }) => {
  const [ingredient, setIngredients] = useState(recipe.ingredients);
  const [instructions, setInstructions] = useState(recipe.instructions);
  //const [time, setTime] = useState(""); 
  // const [unit, setUnit] = useState("");
  //setTime(recipe.prep_time.time);
  // setUnit(recipe.prep_time.unit);
  const navigate = useNavigate();

  const toggleSVG = (index, section) => {
    if (section === "ingredients") {
      const updatedSVGState = [...setIngredients];
      updatedSVGState[index] = !updatedSVGState[index];
      setIngredients(updatedSVGState);
    } else {
      const updatedSVGState = [...setInstructions];
      updatedSVGState[index] = !updatedSVGState[index];
      setInstructions(updatedSVGState);
    }
  };

  if (!recipe) {
    return <div>Recipe not found</div>;
  }else return (
    <div className={styles.recipeInfo}>
      <div className={styles.leftColumn}>
        <img src={recipePhoto} alt="recipeimg" className={styles.photo} />
        <div className={styles.info}>
          <div>
            <h3 className={styles.title}>Ingredients</h3>
            <h3 className={styles.title}>Ingredients</h3>
            <ul>
              {ingredient.map((ingredient, index) => {
                return (
                  <div key={index} className={styles["ingredient-item"]}>
                    <span className={styles["ingredient-svg"]}>
                      <div onClick={() => toggleSVG(index, "ingredients")}>
                        {setIngredients[index] ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#ffa101"
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="#ffa101"
                              d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q-1.35-1.35-3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q-1.35-1.35-2.138-3.175T22 12q0-2.075-.788-3.9t-2.137-3.175q-1.35-1.35-3.175-2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0-3.35 2.325 5.675T12 20Zm0-8Z"
                            />
                          </svg>
                        )}
                      </div>
                    </span>
                    <span className={styles.ingname}>{ingredient.name}</span>
                    <span className={styles["transparent-box"]}></span>
                    <span className={styles["measurement"]}>
                      {ingredient.measurement}
                      <span className={styles.unit}>{ingredient.unit}</span>
                    </span>
                  </div>
                );
              })}
            </ul>
          </div>
          <span className={styles.serving}>Servings: </span>
          <span className={styles.servingContent}>{recipe.serving} </span>
          <span className={styles.serving}> /recipe </span>
          <div className={styles.rightColumn}>
            {/* Rest of your code */}

            <button onClick={() => navigate(`/user/${recipe.user}`)}>
              Check out this chef's other recipes
            </button>
          </div>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <h2 className={styles.maintitle}> {recipe.name}</h2>
        <h3 className={styles.phrase}> It's {recipe.category} time!</h3>
        <span className={styles.origin}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ffa101"
              d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm0 18l2-2l1-1v-2h-2v-1l-1-1H9v3l2 2v1.931C7.06 19.436 4 16.072 4 12l1 1h2v-2h2l3-3V6h-2L9 5v-.411a7.945 7.945 0 0 1 6 0V6l-1 1v2l1 1l3.13-3.13A7.983 7.983 0 0 1 19.736 10H18l-2 2v2l1 1h2l.286.286C18.029 18.061 15.239 20 12 20z"
            />
          </svg>
        </span>
        <span className={styles.timee}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#ffa101"
              d="M10 3.018a.75.75 0 1 1 0-1.5h3.536a.75.75 0 0 1 0 1.5H10Zm-3.47.452a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM12 5.75A7.25 7.25 0 1 0 19.25 13a.75.75 0 1 1 1.5 0A8.75 8.75 0 1 1 12 4.25a.75.75 0 0 1 0 1.5Z"
            />
            <path
              fill="#ffa101"
              d="M17.188 8.364a.75.75 0 0 0-1.052-1.052l-3.17 2.465l-2.072 1.48a1.684 1.684 0 1 0 2.35 2.349l1.479-2.072l2.465-3.17Z"
            />
          </svg>
          <span className={styles.time}>
            {" "}
            {/* {time}  */}
            {/* {unit} */}
          </span>
        </span>
        {/* Likes */}
        <span className={styles.likes}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fa1"
              d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
            />
          </svg>
          <span className={styles.like}> {recipe.likes}</span>
        </span>
        <div className={styles.half}>
          <h3 className={styles.title}>Instructions</h3>
          <div className={styles.instructionsList}>
            {instructions.map((instruction, index) => (
              <div key={index} className={styles.instructionItem}>
                {instruction}
                <div onClick={() => toggleSVG(index, "instructions")}>
                  {setInstructions[index] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#ffa101"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#ffa101"
                        d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q-1.35-1.35-3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q-1.35-1.35-2.138-3.175T22 12q0-2.075-.788-3.9t-2.137-3.175q-1.35-1.35-3.175-2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0-3.35 2.325 5.675T12 20Zm0-8Z"
                      />
                    </svg>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {recipe.chef_note && (
          <div className={styles.chefNoteContainer}>
            <p className={styles.NoteTitle}>Chef's Note:</p>
            <div className={styles.NoteContent}>{recipe.chef_note}</div>
          </div>
        )}
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default Recipe;
