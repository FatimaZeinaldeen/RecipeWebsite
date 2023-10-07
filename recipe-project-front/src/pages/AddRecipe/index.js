import React from "react";
import styles from "./AddRecipe.module.css";
import Countries from "../../Components/CountryDropDown";
import Category from "../../Components/categoryDropdown";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import Textbox from "../../Components/Textbox";
import NumBox from "../../Components/NumBox";
import Label from "../../Components/Label";
import Dropdown from "../../Components/Dropdown";
import { useState } from "react";
const AddRecipe = () => {
  const prepTime = ["min", "hour"];
  const measurments = ["cup/s", "tsp", "tbsp", "L", "mL", "gr", "Kg"];
  const [instruction,setInstruction]=useState('');
  const [instructionsList, setInstructionsList] = useState([]);
  const [name,setName]=useState('');
  const [time,setTime]=useState('');
  const [unit,setUnit]=useState('')
  const [country,setCountry]=useState('');
  const [category,setCategory]=useState('');
  // const [serving,setServing]=useState();
  // const [ingredient,setIngredient]=useState({});
  // const [notes,setNotes]=useState('');

  //adding instruction
  const addInstruction = () => {
    console.log(instruction);
    if (instruction.trim() !== "") {
      setInstructionsList([...instructionsList, instruction]);
      setInstruction('');
    }
  };
  //set the country
  const handleCountrySelect = (selectedCountry) => {
    setCountry(selectedCountry);
  };
  //set category
  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
  };
  const validate=()=>{
    const preptime={
      time:time,
      unit:unit
    }
    console.log(preptime);
    console.log(category);
    console.log(name);
    console.log(country);
  }
  return (
    <div className={styles.Container}>
      <h1 className={styles.h1}>Let’s make a culinary masterpiece</h1>
      {/* Form */}
      <div className={styles.mainForm}>
        <div className={styles.form}>
          <div className={styles.leftForm}>
            {/* Recipe name */}
            <div className={styles.subForms}>
              <Label text="Recipe Name:" />
              <Textbox onChange={(e)=>setName(e.target.value)}/>
            </div>
            {/* prep time */}
            <div className={styles.subForms}>
              <Label text="Preparation Time:" />
              <NumBox  onChange={(e) => setUnit(e.target.value)}/>
              <Dropdown elements={prepTime} onSelect={(e) => setTime(e.target.value)} />
            </div>
            {/* countries */}
            <div className={styles.subForms}>
              <Countries onSelect={handleCountrySelect}/>
            </div>
            {/* category */}
            <div className={styles.subForms}>
              <Category onSelect={handleCategorySelect}/>
            </div>
            {/* Serving */}
            <div className={styles.subForms}>
              <Label text="Serving:" />
              <NumBox />
              <p className={styles.IndexedLabel}>/Recipe</p>
            </div>
            {/* Ingredients */}
            <div className={styles.subForms}>
              <Label text="Ingredient:" />
              <Textbox />
              <Label text="Measurment:" />
              <NumBox />
              <Dropdown elements={measurments} />
              <Button text="Add" />
              <div>{/* to display ingredients */}</div>
            </div>
            {/* chef notes */}
            <div className={styles.subForms}>
              <Label text="Chef's Notes:" />
              <Textbox />
            </div>
          </div>
          {/* Instructions */}
          <div className={styles.rightForm}>
            <div className={styles.subForms}>
              <Label text="Instructions:" />
              <Textbox value={instruction} onChange={(e) => setInstruction(e.target.value)} />
              <Button text="Add" onClick={addInstruction} />
            </div>
            <div>
              <ul id="instructions" className={styles.Textarea} >
                <br/>
                {instructionsList.map((item)=>{
                  return(
                    <li>{item}</li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        {/* submit or cancel */}
        <div className={styles.buttonsForm}>
          <div className={styles.centerButtons}>
            <div>
              <Button text="Share your Recipe!" onClick={validate} />
            </div>
            <div>
              <Link to="/" className={styles.CancelButton}>
                Cancel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
