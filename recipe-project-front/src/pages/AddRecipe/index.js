import React from "react";
import styles from "./AddRecipe.module.css";
import Countries from "../../Components/CountryDropDown";
import Category from "../../Components/categoryDropdown";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import Textbox from "../../Components/Textbox";
import NumBox from "../../Components/NumBox";
import Label from "../../Components/Label";
import Dropdown from "../../Components/Dropdown"
const AddRecipe = () => {
  const prepTime=["min","hour"];
  const measurments=["cup/s", "tsp", "tbsp", "L", "mL", "gr", "Kg"];
  return (
    <div className={styles.Container}>
      <h1 className={styles.h1}>Let’s make a culinary masterpiece</h1>
      <form method="POST" className={styles.mainForm}>
        <div className={styles.leftForm}>
        <div className={styles.subForms}>
          <Label text="Recipe Name:" />
          <Textbox/>
        </div>
        <div className={styles.subForms}>
        <Label text="Preparation Time:" />
          <NumBox/>
          <Dropdown elements={prepTime}/>
        </div>
        <div className={styles.subForms}>
          <Countries />
        </div>
        <div className={styles.subForms}>
          <Category />
        </div>
        <div className={styles.subForms}>
        <Label text="Serving:" />
          <NumBox/>
          <p className={styles.IndexedLabel}>/Recipe</p>
        </div>
        <div className={styles.subForms}>
        <Label text="Ingredient:" />
          <Textbox/>
          <Label text="Measurement:" />
          <NumBox/>
          <Dropdown elements={measurments}/>
          <Button text="Add"/>
          <div>{/* to display ingredients */}</div>
        </div>
        <div className={styles.subForms}>
        <Label text="Chef's Notes:" />
          <Textbox/>
        </div>
        <div className={styles.subForms}>
        <Button text="Share your Recipe!"/>
        <Link to="/" className={styles.CancelButton}>
          Cancel
        </Link>
        </div>
        </div>
        <div className={styles.rightForm}>
        <div className={styles.subForms}>
        <Label text="Instructions:" />
          <Textbox/>
          <Button text="Add"/>
          <div>{/* list of instructions */}</div>
        </div>
        </div>
      </form>
    </div>
  );
};

export default AddRecipe;
