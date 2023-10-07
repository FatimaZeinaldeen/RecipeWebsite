import React from "react";
import styles from "./NumBox.module.css";

function NumBox(props) {
  return (
    <input
      type="number"
      min={0}
      value={props.value}
      onChange={props.onChange}
      className={styles.Numbox}
    />
  );
}

export default NumBox;
