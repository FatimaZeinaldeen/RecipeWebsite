import React from "react";
import styles from "./navbar.module.css";
import { Link, useLocation } from "react-router-dom";
const LoginIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.5em"
    height="1.2em"
    viewBox="0 0 25 20"
  >
    <path
      fill="#FFFF"
      d="M12 6c1.654 0 3 1.346 3 3s-1.346 3-3 3s-3-1.346-3-3s1.346-3 3-3m0-2C9.236 4 7 6.238 7 9s2.236 5 5 5s5-2.238 5-5s-2.236-5-5-5zm0 13c2.021 0 3.301.771 3.783 1.445c-.683.26-1.969.555-3.783.555c-1.984 0-3.206-.305-3.818-.542C8.641 17.743 9.959 17 12 17m0-2c-3.75 0-6 2-6 4c0 1 2.25 2 6 2c3.518 0 6-1 6-2c0-2-2.354-4-6-4z"
    />
  </svg>
);
function Navbar() {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname ? styles.activeLink : "";
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.headerLeft}>
        {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="6em"
            height="4em"
            viewBox="0 0 80 72"
            
          >
            <path
              fill="#FFF"
              d="M7 36c0 16.017 12.983 29 29 29s29-12.983 29-29H7z"
            />
            <path
              fill="#d0cfce"
              d="M49 36c0 16.016-4 29-13 29c16.017 0 29-12.984 29-29H49z"
            />
            <path
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="2"
              d="M7 36c0 16.017 12.983 29 29 29s29-12.983 29-29H7zm0-10.859l7 7M29.043 7.846a4.953 4.953 0 0 0 1.42 3.084a5 5 0 0 1 0 7.07a5 5 0 0 0 0 7.07a5 5 0 0 1 0 7.07M34.57 7.036c-.1 1.398.362 2.826 1.43 3.894A5 5 0 0 1 36 18a5 5 0 0 0 0 7.07a5 5 0 0 1 0 7.07m4.01-24.857a4.969 4.969 0 0 0 1.454 3.647a5 5 0 0 1 0 7.07a5 5 0 0 0 0 7.07a5 5 0 0 1 0 7.07"
            />
          </svg>
        }
        <span className={styles.websiteName}>Mye</span>
      </div>
      <div className={styles.headermiddle}>
        <ul className={styles.navList}>
          <ul className={styles.navItem}>
            <Link to="/" className={`${styles.navLink} ${isActive("/")}`}>
              Home
            </Link>
            <Link
              to="/About-Us/getAllfeedbacks"
              className={`${styles.navLink} ${isActive("/About-Us/getAllfeedbacks")}`}
            >
              About
            </Link>
            <Link to="/login" className={styles.loginLink}>
              <div className={styles.loginIcon}>{LoginIcon} </div>
              <div>Login</div>
            </Link>
          </ul>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
