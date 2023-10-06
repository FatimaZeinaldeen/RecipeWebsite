import React from "react";
import styles from "./Textbox.module.css";
function Textbox({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={styles.Textbox}
    />
  );
}

export default Textbox;
