import React from 'react'
import styles from "./NumBox.module.css"
function NumBox() {
  return (
    <div>
        <input type="number" min={1} max={100} className={styles.Numbox} />
    </div>
  )
}

export default NumBox