import React from 'react';
import styles from './footer.module.css';
import { Link  } from 'react-router-dom';

function Footer() {
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <span className={styles.websiteName}>A taste of home in every
        </span>
        {/* You can add a logo here if desired */}
      </div>
      <div className={styles.footermiddle}>
      <ul className={styles.footlist}>
        <ul className={styles.footitem}>
        <Link to="/" className={styles.footlink}>Home</Link>
        <Link to="/about" className={styles.footlink}>About</Link>
        <Link to="/login" className={styles.footlink}>Login</Link>
  
        </ul>
      </ul>
      </div>
    </footer>
    
  );
}

export default Footer;
