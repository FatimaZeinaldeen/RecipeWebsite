import React from 'react';
import styles from './navbar.module.css'; // Import the CSS module

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>Home</a>
        </li>
        {/* Add more list items here */}
      </ul>
    </nav>
  );
}

export default Navbar;
