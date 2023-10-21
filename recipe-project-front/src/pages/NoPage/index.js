import React from 'react';
import styles from "./nopage.module.css"

function NoPage() {
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <h1 className={styles.h1}>404</h1>
      <h4 className={styles.h4}>ERROR</h4>
      <h2 className={styles.h2}>Page Not Found</h2>
      </div>
      
    </div>
  )
}

export default NoPage