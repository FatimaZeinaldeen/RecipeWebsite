import React from "react";
import styles from "./Ingredient.module.css";
function Ingredient(props) {
  return (
    <div className={styles.main} onClick={props.onClick} >
      <p>{props.text}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="#ffa101"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
        />
      </svg>
    </div>
  );
}

export default Ingredient;
