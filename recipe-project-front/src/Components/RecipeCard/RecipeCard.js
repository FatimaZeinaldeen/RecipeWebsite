import React, { useState } from 'react';
import Style from './recipeCard.module.css'; 
import recipePhoto from "../../assets/photos/PastaPesto.jpg";

const RecipeCard = ({ recipe ,onLike,onUnLike,onClick }) => {  
  
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  const handleLikeClick = () => {
    if(!isLiked){
      onLike(recipe._id); 
      toggleLike();
    }
     else{
      onUnLike(recipe._id);
      toggleLike();
     }
    
  };
  
  return (
    <div className={Style.recipecard} onClick={onClick}>
      <div className={Style.recipeimagecontainer}>
         <img src={recipePhoto} alt="recipeimg" className={Style.recipeimage} />
         <div className={Style.likeicon} onClick={handleLikeClick}>
             <i className={Style.fasfaheart} ><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 14 14"><path fill={isLiked ? '#FFA101' : 'none'} stroke="#FFA101" stroke-linecap="round" stroke-linejoin="round" d="m7 12.45l-5.52-5c-3-3 1.41-8.76 5.52-4.1c4.11-4.66 8.5 1.12 5.52 4.1Z"/></svg></i> 
         </div>
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

export default RecipeCard;
