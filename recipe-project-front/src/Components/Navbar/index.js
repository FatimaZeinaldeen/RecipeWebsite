import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom'; // Import the CSS module
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS*/


function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.headerLeft}>
        <span className={styles.websiteName}>Recipe Website Name</span>
        {/* You can add a logo here if desired */}
      </div>
      <div className={styles.headermiddle}>
      <ul className={styles.navList}>
        <ul className={styles.navItem}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/about" className={styles.navLink}>About</Link>
        <Link to="/login" className={styles.navLink}> Login
  </Link>
        </ul>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
