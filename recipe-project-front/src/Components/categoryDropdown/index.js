import React from "react";
import styles from "./dropdown.module.css";
const Category = () => {
  return (
    <div>
      <form>
        <select
          id="select"
          name="Category"
          title="Category"
          className={styles.dropdown}
        >
          <option className={styles.options} value="Category" selected>
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
