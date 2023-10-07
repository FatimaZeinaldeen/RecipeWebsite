import React from 'react';
import Style from './topRecipeCard.module.css'; 
import recipePhoto from "../../assets/photos/PastaPesto.jpg";

const TopRecipeCard = ({ recipe ,onLike,likes}) => {
  return (
    <div className={Style.recipecard}>
      <div className={Style.recipeimagecontainer}>
         <img src={recipePhoto} alt="recipeimg" className={Style.recipeimage} />
      </div>
      <div className={Style.recipedetails}>
         <h2 className={Style.recipetitle} >{recipe.name}</h2>
         <div className={Style.recipeinfo} >
             <div className={Style.recipelikes} >
                  {recipe.likes} Likes
             </div>
             <div className={Style.recipereviews}>
                 {recipe.reviews} 3 Reviews
             </div>
         </div>
      </div>
    </div>
  );
};

export default TopRecipeCard;
