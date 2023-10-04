import React from "react";
import styles from "./AddRecipe.module.css";
import Countries from "../../Components/CountryDropDown";
import Category from "../../Components/categoryDropdown";
const AddRecipe = () => {
  return (
    <div className={styles.Container}>
      <h1 className={styles.h1}>Let’s make a culinary masterpiece</h1>
      <form method="POST" className={styles.mainForm}>
        <div className={styles.subForms}>
          <p className={styles.Labels}>Recipe Name:</p>
          <input type="text" className={styles.Textbox} />
        </div>
        <div className={styles.subForms}>
          <p className={styles.Labels}>Preparation time:</p>
          <input type="text" className={styles.numTextbox} />
          <select className={styles.Dropdowns}>
            <option value="min">min</option>
            <option value="hour">hour</option>
          </select>
        </div>
        <div className={styles.subForms}>
          <Countries />
        </div>
        <div className={styles.subForms}>
          <Category />
        </div>
        <div className={styles.subForms}>
          <p className={styles.Labels}>Servings:</p>
          <input type="text" className={styles.numTextbox} />
          <p className={styles.IndexedLabel}>/Recipe</p>
        </div>
        <div className={styles.subForms}>
          <p className={styles.Labels}>Ingredients:</p>
          <input type="text" className={styles.Textbox} />
          <p className={styles.Labels}>Measurement:</p>
          <input type="text" className={styles.numTextbox} />
          <select className={styles.Dropdowns}>
            <option value="cup/s">cup/s</option>
            <option value="tsp">tsp</option>
            <option value="tbsp">tsbp</option>
            <option value="L">L</option>
            <option value="mL">mL</option>
            <option value="gr">gr</option>
            <option value="Kg">Kg</option>
          </select>
          <button>Add</button>
          <div>{/* to display ingredients */}</div>
        </div>
        <div className={styles.subForms}>
          <p className={styles.Labels}>Instructions:</p>
          <input type="text" className={styles.Textbox} />
          <button>Add</button>
          <div>{/* list of instructions */}</div>
        </div>
        <div className={styles.subForms}>
          <p className={styles.Labels}>Chef's Notes:</p>
          <input type="text" className={styles.Textbox} />
        </div>
        <button>Share your Recipe!</button>
        <button>Cancel</button>
      </form>
    </div>
  );
};

export default AddRecipe;
