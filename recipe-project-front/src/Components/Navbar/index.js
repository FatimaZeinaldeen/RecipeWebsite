import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom'; // Import the CSS module

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
        <Link to="/" className={styles.navLink}>Home</Link>
        </li>
        {/* Add more list items here */}
      </ul>
    </nav>
  );
}

export default Navbar;
