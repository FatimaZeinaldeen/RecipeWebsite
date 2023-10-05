import React from 'react'
import styles from "./Label.module.css";
function Label(props) {
  return (
    <div>
        <p className={styles.Label}>{props.text}</p>
    </div>
  )
}

export default Label