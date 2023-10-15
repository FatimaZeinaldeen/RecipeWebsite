import React, { useEffect } from "react";
import styles from "./AddRecipe.module.css";
import Countries from "../../Components/CountryDropDown";
import Category from "../../Components/categoryDropdown";
import Button from "../../Components/Button";
import { Link, useParams } from "react-router-dom";
import Textbox from "../../Components/Textbox";
import NumBox from "../../Components/NumBox";
import Label from "../../Components/Label";
import Dropdown from "../../Components/Dropdown";
import { useState } from "react";
import Ingredient from "../../Components/Ingredient";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Types } from "mongoose";

const AddRecipe = () => {
  const navigate = useNavigate();
  const prepTime = ["min", "hour"];
  const measurments = [
    "cup/s",
    "tsp",
    "tbsp",
    "L",
    "mL",
    "gr",
    "Kg",
    "pieces",
    "slices",
  ];
  const [instruction, setInstruction] = useState("");
  const [instructionsList, setInstructionsList] = useState([]);
  const [name, setName] = useState(""); //
  const [time, setTime] = useState(""); //
  const [unit, setUnit] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");
  const [serving, setServing] = useState(0);
  const [notes, setNotes] = useState("");
  const [ingname, setIngName] = useState("");
  const [ingmeasure, setMeasure] = useState(0);
  const [ingunit, setIngUnit] = useState("");
  const [ingredientlist, setIngredientList] = useState([]);
  const [errorArray, setErrorArray] = useState([]);

  const { id } = useParams();
  const userId = localStorage.getItem('userId');
  //check user if admin 
  useEffect(()=>{
    if(userId !== id){
      navigate("/no-page");
    }
  });
  //validating and posting
  const validate = () => {
    setErrorArray([]);
    if (unit === "") {
      setUnit("min");
    }
    
      if (
        name !== "" &&
        time !== "" &&
        unit !== "" &&
        country !== "" &&
        category !== "" &&
        serving !== 0 &&
        ingredientlist.length !== 0 &&
        instructionsList.length !== 0
      ) {
        document.getElementById("errors").hidden = true;
        postRecipe();
      } else {
        const errors = [];
        if (name === "") {
          errors.push("Recipe Name");
        }
        if (time === "") {
          errors.push("Preparation time");
        }
        if (unit === "") {
          errors.push("Preparation time unit");
        }
        if (country === "") {
          errors.push("Country");
        }
        if (category === "") {
          errors.push("Category");
        }
        if (serving === 0) {
          errors.push("Serving");
        }
        if (ingredientlist.length === 0) {
          errors.push("Ingredient");
        }
        if (instructionsList.length === 0) {
          errors.push("Instructions");
        }

        setErrorArray(errors);
        document.getElementById("errors").hidden = false;
      }
   
  };
  //post a recipe
  const postRecipe = async () => {
    try {
      const data = {
        name: name,
        category: category,
        user: id.toString(),
        Country: country,
        prep_time: {
          time: parseFloat(time),
          unit: unit,
        },
        serving: parseInt(serving),
        chef_note: notes,
        instructions: instructionsList,
        ingredients: ingredientlist,
      };
      const jsonData = JSON.stringify(data);
      console.log(jsonData);
      const response = await axios.post(
        `http://localhost:3000/Recipe/add-recipe/${id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const recipeId =new Types.ObjectId(response.data._id);
      navigate(`/recipe/${recipeId}`);
    } catch (error) {
      console.error("Error posting recipe data:", error);
    }
  };
  //adding instruction
  const addInstruction = () => {
    if (instruction.trim() !== "") {
      setInstructionsList([...instructionsList, instruction]);
      document.getElementById("instructions").hidden = false;
      setInstruction("");
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
  //Adding ingredient
  const addIngredient = () => {
    if (ingunit === "") {
      setIngUnit("cup/s");
    }
    if (ingmeasure !== 0 && ingunit !== "" && ingname !== "") {
      const ingString = ingmeasure + ingunit + " " + ingname;
      if (ingString.trim("") !== "") {
        const ingredient = {
          name: ingname,
          measurement: ingmeasure,
          unit: ingunit,
        };
        setIngredientList([...ingredientlist, ingredient]);
      }
      setIngName("");
      setMeasure(0);
      console.log(ingredientlist);
    }
  };
  //remove Ingredient
  const removeIngredient = (ingredientName) => {
    const updatedIngredientList = ingredientlist.filter(
      (ing) => ing.name !== ingredientName
    );
    setIngredientList(updatedIngredientList);
  };

  return (
    <body className={styles.background}>
      <div className={styles.Container}>
        <h1 className={styles.h1}>Let’s make a culinary masterpiece</h1>
        {/* Form */}
        <div className={styles.mainForm}>
          <div className={styles.form}>
            <div className={styles.leftForm}>
              {/* Recipe name */}
              <div className={styles.subForms}>
                <Label text="Recipe Name:" />
                <Textbox onChange={(e) => setName(e.target.value)} />
              </div>
              {/* chef notes */}
              <div className={styles.subForms}>
                <div className={styles.centerButtons}>
                  <Label text="Chef's Notes:" />
                  <input
                    type="text"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className={styles.Textbox}
                    placeholder="*Optional"
                  />
                </div>
              </div>
              {/* countries and category */}
              <div className={styles.subForms}>
                <div className={styles.Countries}>
                  <Countries onSelect={handleCountrySelect} />
                </div>
                <div>
                  <Category onSelect={handleCategorySelect} />
                </div>
              </div>
              {/* prep time */}
              <div className={styles.subForms}>
                <Label text="Preparation Time:" />
                <NumBox onChange={(e) => setTime(e.target.value)} />
                <Dropdown
                  elements={prepTime}
                  onSelect={(e) => setUnit(e.target.value)}
                />
              </div>
              {/* Serving */}
              <div className={styles.subForms}>
                <Label text="Serving:" />
                <NumBox onChange={(e) => setServing(e.target.value)} />
                <p className={styles.IndexedLabel}>/Recipe</p>
              </div>
            </div>
            {/* Instructions */}
            <div className={styles.rightForm}>
              <div className={styles.subForms}>
                <Label text="Instructions:" />
                <Textbox
                  value={instruction}
                  onChange={(e) => setInstruction(e.target.value)}
                />
                <Button text="Add" onClick={addInstruction} />
              </div>
              <div>
                <ul id="instructions" className={styles.Textarea} hidden>
                  <br />
                  {instructionsList.map((item) => {
                    return <li>{item}</li>;
                  })}
                </ul>
              </div>
              {/* Ingredients */}
              <div className={styles.subForms}>
                <div className={styles.label}>
                  <Label text="Ingredient:" />
                </div>
                <Textbox
                  value={ingname}
                  onChange={(e) => {
                    setIngName(e.target.value);
                  }}
                />
                <Label text="Measurment:" />
                <NumBox
                  value={ingmeasure}
                  onChange={(e) => {
                    setMeasure(parseFloat(e.target.value));
                  }}
                />
                <Dropdown
                  elements={measurments}
                  onSelect={(e) => setIngUnit(e.target.value)}
                />
                <Button text="Add" onClick={addIngredient} />
              </div>
              <div className={styles.Ingredients}>
                {ingredientlist.map((ing) => {
                  return (
                    <Ingredient
                      key={ing.name}
                      text={ing.measurement + ing.unit + " " + ing.name}
                      onClick={() => removeIngredient(ing.name)}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          {/* error message */}
          <h4 className={styles.error} hidden id="errors">
            *Some fields are missing:
            <p>
              {errorArray.map((error, index) => {
                return " " + (index + 1) + "-" + error + " ";
              })}
            </p>
          </h4>
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
    </body>
  );
};

export default AddRecipe;
