import React from 'react'
import styles from "./Dropdown.module.css";
function Dropdown(props) {
  return (
    <div>
        <select className={styles.Dropdowns}>
            {props.elements.map((element)=>{
                return (
                    <option value={element}>{element}</option>
                )
            })}
          </select>
    </div>
  )
}

export default Dropdown