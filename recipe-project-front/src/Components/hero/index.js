import React from 'react';
import styles from "./hero.module.css";
import bg from "../../assets/photos/Screenshot.png";
import bg1 from "../../assets/photos/1.png";
import bg2 from "../../assets/photos/2.png";
import bg3 from "../../assets/photos/the_world_to_your_table-removebg-preview.png";

const hero=() => {
  return (
    <div>
        <div className={styles.hero}>
             <img src={bg} alt='bgPhoto' className={styles.img}></img>
             <img src={bg1} alt='bgPhoto' className={styles.img1}></img>
             <img src={bg2} alt='bgPhoto' className={styles.img2}></img>
             <img src={bg3} alt='bgPhoto' className={styles.img3}></img>
        </div>
        
    </div>
  );
};

export default hero;