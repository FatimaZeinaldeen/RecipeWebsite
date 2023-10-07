import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from "../../Components/Button";
import Textboxx from "../../Components/Textbox2";
import styles from "./login.module.css"; 
import b3 from "../../assets/photos/b3.png";

const userSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path fill="#ffa101" d="M12 6c1.654 0 3 1.346 3 3s-1.346 3-3 3s-3-1.346-3-3s1.346-3 3-3m0-2C9.236 4 7 6.238 7 9s2.236 5 5 5s5-2.238 5-5s-2.236-5-5-5zm0 13c2.021 0 3.301.771 3.783 1.445c-.683.26-1.969.555-3.783.555c-1.984 0-3.206-.305-3.818-.542C8.641 17.743 9.959 17 12 17m0-2c-3.75 0-6 2-6 4c0 1 2.25 2 6 2c3.518 0 6-1 6-2c0-2-2.354-4-6-4z"/>
  </svg>
);



function Login() {
  
  const [password, setPassword] = useState('');
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    
  };



  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const isFormValid = () => {
    return (
      firstName !== '' &&
      lastName !== '' &&
      email !== '' &&
      password !== ''
    );
  };
  
  return (
    <div className={styles.container}>
        <img alt="backgroudPic" src={b3} className={styles.bgPic}></img>
        <div className={styles.header}>
           <div className={styles.text}>Welcome Back!</div>
           <div className={styles.underline}></div>
        </div>
        <div className={styles.inputs}>
           <div className={styles.inputemail}>
           <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
              <path fill="#ffa101" d="M22 5.5H9c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h13c1.11 0 2-.89 2-2v-9a2 2 0 0 0-2-2m0 11H9V9.17l6.5 3.33L22 9.17v7.33m-6.5-5.69L9 7.5h13l-6.5 3.31"/>
           </svg>
             <Textboxx type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
           </div>
           <div className={styles.inputpassword}>
             <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
               <path fill="#ffa101" d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10h12m0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"/>
            </svg>
             <Textboxx type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
             <div className={styles.forgotpass}>
              <p className={styles.Linkforgotpass}><Link to="/">Forgot password?</Link></p>
            </div>
           </div>
           <div className={styles.login}>
             <Link to="/nopage">
               <Button text="Login" disabled={!isFormValid()} />
             </Link>
            </div>
            <div className={styles['Sign up']}>
              Don't have an account? <Link to="/register">Sign up</Link>
            </div>
        </div>
    </div>
  );
}

export default Login;
