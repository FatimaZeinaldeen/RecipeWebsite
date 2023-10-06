import React from 'react';
import styles from './footer.module.css';

// Define the URLs for Instagram and Twitter
const instagramUrl = 'https://www.instagram.com/your-instagram-url';
const twitterUrl = 'https://twitter.com/your-twitter-url';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <span className={styles.websiteName}>A taste of home in every dish</span>
        {/* You can add a logo here if desired */}
      </div>
      <div className={styles.footermiddle}>
        <div className={styles.footlist}>
          <a href="/about" className={styles.footitem}>
            {/* Add your About SVG path here */}
          </a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={styles.footitem}>
            {/* Add your Instagram SVG path here */}
          </a>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className={styles.footitem}>
            {/* Add your Twitter SVG path here */}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
