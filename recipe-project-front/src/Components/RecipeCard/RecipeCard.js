import React from 'react';
import Style from './recipeCard.module.css'; 
import recipePhoto from "../../assets/photos/PastaPesto.jpg";

const RecipeCard = ({ recipe ,likes}) => {   //,onLike
  return (
    <div className={Style.recipecard}>
      <div className={Style.recipeimagecontainer}>
         <img src={recipePhoto} alt="recipeimg" className={Style.recipeimage} />
          <div className={Style.likeicon} > {/*onClick={() => onLike(recipe.id)} */}
             <i className={Style.fasfaheart} ><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 26 26"><path fill="#FFA101" d="M17.869 3.889c-2.096 0-3.887 1.494-4.871 2.524c-.984-1.03-2.771-2.524-4.866-2.524C4.521 3.889 2 6.406 2 10.009c0 3.97 3.131 6.536 6.16 9.018c1.43 1.173 2.91 2.385 4.045 3.729c.191.225.471.355.765.355h.058c.295 0 .574-.131.764-.355c1.137-1.344 2.616-2.557 4.047-3.729C20.867 16.546 24 13.98 24 10.009c0-3.603-2.521-6.12-6.131-6.12z"/></svg></i> 
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
