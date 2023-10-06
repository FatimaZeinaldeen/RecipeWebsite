import React from 'react';
import styles from "./Dropdown.module.css";

function Dropdown(props) {
  return (
    <div>
        <select className={styles.Dropdowns} onChange={props.onSelect}>
            {props.elements.map((element) => {
                return (
                    <option value={element} key={element}>{element}</option>
                )
            })}
          </select>
    </div>
  );
}

export default Dropdown;