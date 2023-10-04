import React from "react";
import { useState } from "react";
import styles from "./dropdown.module.css";
const Category = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleDropdownClick = () => {
    setIsClicked(true);    
  };
  return (
    <div>
      <form>
        <select
          id="select"
          name="Category"
          title="Category"
          className={`${styles.dropdown} ${isClicked ? styles.clicked : ""}`}
          onClick={handleDropdownClick}
        >
          <option className={styles.options} id="category" value="Category" selected hidden >
            Category
          </option>
          <option className={styles.options} value="Lunch">
            Lunch
          </option>
          <option className={styles.options} value="Breakfast">
            Breakfast
          </option>
          <option className={styles.options} value="Dinner">
            Dinner
          </option>
          <option className={styles.options} value="Dessert">
            Dessert
          </option>
          <option className={styles.options} value="Snack">
            Snack
          </option>
          <option className={styles.options} value="Drinks">
            Drinks
          </option>
          <option className={styles.options} value="Vegan">
            Vegan
          </option>
          <option className={styles.options} value="Salad">
            Salad
          </option>
        </select>
      </form>
    </div>
  );
};

export default Category;
