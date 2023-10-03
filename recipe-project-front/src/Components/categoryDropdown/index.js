import React from "react";

const Category = () => {
  //enum:["Lunch","Breakfast","Dinner","Dessert","Snack","Drinks","Vegan","Salad"]
  return (
    <div>
        <p>select a cetgory:</p>
      <form>
        <select placeholder="Category">
          <option value="Lunch">Lunch</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
          <option value="Snack">Snack</option>
          <option value="Drinks">Drinks</option>
          <option value="Vegan">Vegan</option>
          <option value="Salad">Salad</option>
        </select>
      </form>
    </div>
  );
};

export default Category;
