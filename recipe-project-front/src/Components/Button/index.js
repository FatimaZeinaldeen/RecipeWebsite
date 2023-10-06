import React from 'react'
import styles from "./button.module.css"
function Button(props,onClick ) {
  return (
    <button className={styles.button} onClick={props.onClick}>
    {props.text}
  </button>  
  )
}

export default Button