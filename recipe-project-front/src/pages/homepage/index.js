import React , { useState,useEffect } from "react";
import RecipeCard from "../../Components/RecipeCard/RecipeCard.js";
import TopRecipeCard from "../../Components/TopRecipeCard/topRecipeCard.js";
import Style from "./homepage.module.css";
import bg from "../../assets/photos/bg.png";
import axios from 'axios';

function Home() {

  // const [likes, setLikes] = useState({}); 
  // const initialLikes = {};
  // const handleLike = (recipeId) => {
  //   setLikes((prevLikes) => ({
  //     ...prevLikes,
  //     [recipeId]: (prevLikes[recipeId] || 0) + 1,
  //   }));

  //   axios.post(`http://your-api-endpoint/like-recipe/${recipeId}`);
  // };

  const [recipes, setRecipes] = useState([]);
 useEffect(() => {
    axios.get("http://localhost:3000/Recipe/all-recipes").then((response) => {
      setRecipes(response.data);
    });
  }, []);

  const topRecipes = recipes.slice().sort((a, b) => b.likes - a.likes).slice(0, 5);

  const [isClicked, setIsClicked] = useState(false);

  const handleDropdownClick = () => {
    setIsClicked(true);    
  }
  const countryContext = require.context(
    "../../assets/Images/",
    false,
    /\.(png)$/ // Specify the file extension you want to include
  );
  const countryArray=countryContext.keys();
  const countryNames=countryArray.map((country)=>{
    return(
        country.split("/")[1].split(".")[0].split("-")[1]
    )
  })
  return (
      
      <div>
          <div className={Style.backgroundP}>
              <img src={bg}  alt="bgPhoto" ></img>
              <p className={Style.p1}>Bringing the World to Your Table</p>
              <p className={Style.p2}>Explore a World of Culinary Delights with Food Lovers. Share Your Culinary Adventures on Our  Platform... </p>
              <div className={Style.scroll}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16"><path fill="#ffa101" fill-rule="evenodd" d="M14.207 1.707L13.5 1l-6 6l-6-6l-.707.707l6.353 6.354h.708l6.353-6.354zm0 6L13.5 7l-6 6l-6-6l-.707.707l6.353 6.354h.708l6.353-6.354z" clip-rule="evenodd"/></svg>
                  <p>BE YOUR OWN CHEF</p>
              </div>
          </div>
          <form className={Style.formsearch}>
             <div className={Style.searchContainer}>
               <textarea className={Style.txtareasearch} placeholder="what are we cooking today?..." rows="1" cols="50" style={{ resize: 'none' }}/>
               <button className={Style.btnsearch} type="submit">
               <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="rgb(87, 86, 86)" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.612 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3l-1.4 1.4ZM9.5 14q1.875 0 3.188-1.313T14 9.5q0-1.875-1.313-3.188T9.5 5Q7.625 5 6.312 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14Z"/></svg>
               </button>
             </div>
          </form>
          <p className={Style.toprecipes}>TOP RECIPES</p>
          <div className={Style.divtoprecipes}>
                {topRecipes.map((recipe) => (
                 <TopRecipeCard
                   key={recipe.id}
                   recipe={recipe}
                  //  onLike={handleLike}
                 />
                ))}
          </div>
          <p className={Style.sharedRecipes}>Recipes shared by fellow cooks:</p>
  <div className={Style.filters}>
    <div className={Style.Category}>
      <form>
        <select
          id="select"
          name="Category"
          title="Category"
          className={`${Style.dropdown} ${isClicked ? Style.clicked : ""}`}
          onClick={handleDropdownClick}
        >
          <option className={Style.options} id="category" value="Category" selected hidden >
            Category
          </option>
          <option className={Style.options} value="Lunch">
            Lunch
          </option>
          <option className={Style.options} value="Breakfast">
            Breakfast
          </option>
          <option className={Style.options} value="Dinner">
            Dinner
          </option>
          <option className={Style.options} value="Dessert">
            Dessert
          </option>
          <option className={Style.options} value="Snack">
            Snack
          </option>
          <option className={Style.options} value="Drinks">
            Drinks
          </option>
          <option className={Style.options} value="Vegan">
            Vegan
          </option>
          <option className={Style.options} value="Salad">
            Salad
          </option>
        </select>
      </form>
    </div>
    <div className={Style.Country}>
      <form>
        <select
          id="select"
          name="Country"
          title="Country"
          className={`${Style.dropdown} ${isClicked ? Style.clicked : ""}`}
          onClick={handleDropdownClick}
        >
          <option className={Style.options} value="Category" hidden>
            Country
          </option>
          {countryNames.map((country) => (
        <option className={Style.options} value={country}>
            <p>{country}</p>
        </option>
    ))}
        </select>
      </form>
    </div>
    <textarea className={Style.txtareaing} placeholder="Search for multiple ingredients separated by ‘,’" rows="1" cols="50" style={{ resize: 'none' }}/>
    <button className={Style.searchfilter}>Search</button>
    </div>
          <div className={Style.divrecipes}>
                {recipes.map((recipe) => (
                 <RecipeCard
                   key={recipe.id}
                   recipe={recipe}
                  //  onLike={handleLike}
                 />
                ))}
          </div>
  </div>
    
  );
};

export default Home;