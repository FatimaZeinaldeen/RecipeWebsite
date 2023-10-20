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
          <a href="/About-Us" className={styles.about}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2.1em" height="2.1em" viewBox="0 0 24 24"><path fill="#ffa101" d="M13.5 4A1.5 1.5 0 0 0 12 5.5A1.5 1.5 0 0 0 13.5 7A1.5 1.5 0 0 0 15 5.5A1.5 1.5 0 0 0 13.5 4m-.36 4.77c-1.19.1-4.44 2.69-4.44 2.69c-.2.15-.14.14.02.42c.16.27.14.29.33.16c.2-.13.53-.34 1.08-.68c2.12-1.36.34 1.78-.57 7.07c-.36 2.62 2 1.27 2.61.87c.6-.39 2.21-1.5 2.37-1.61c.22-.15.06-.27-.11-.52c-.12-.17-.24-.05-.24-.05c-.65.43-1.84 1.33-2 .76c-.19-.57 1.03-4.48 1.7-7.17c.11-.64.41-2.04-.75-1.94Z"/></svg>
          </a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={styles.insta}>
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none" stroke="#ffa101" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="66" stroke-dashoffset="66" d="M12 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="66;132"/></path><path stroke-dasharray="26" stroke-dashoffset="26" d="M12 8C14.20914 8 16 9.79086 16 12C16 14.20914 14.20914 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="26;0"/></path></g><circle cx="17" cy="7" r="1.5" fill="#ffa101" fill-opacity="0"><animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.4s" values="0;1"/></circle></svg>
          </a>
          <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className={styles.x}>
            <svg xmlns="http://www.w3.org/2000/svg" width="1.9em" height="1.9em" viewBox="0 0 24 24"><path fill="#ffa101" d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>

          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
