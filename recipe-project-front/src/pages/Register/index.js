import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from "../../Components/Button";
import Countries from "../../Components/CountryDropDown";
import Textbox from "../../Components/Textbox";
import styles from "./register.module.css"; // Import your CSS module styles
// Define the SVG constants
const emailSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path fill="#ffa101" d="M22 5.5H9c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h13c1.11 0 2-.89 2-2v-9a2 2 0 0 0-2-2m0 11H9V9.17l6.5 3.33L22 9.17v7.33m-6.5-5.69L9 7.5h13l-6.5 3.31"/>
  </svg>
);

const userSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path fill="#ffa101" d="M12 6c1.654 0 3 1.346 3 3s-1.346 3-3 3s-3-1.346-3-3s1.346-3 3-3m0-2C9.236 4 7 6.238 7 9s2.236 5 5 5s5-2.238 5-5s-2.236-5-5-5zm0 13c2.021 0 3.301.771 3.783 1.445c-.683.26-1.969.555-3.783.555c-1.984 0-3.206-.305-3.818-.542C8.641 17.743 9.959 17 12 17m0-2c-3.75 0-6 2-6 4c0 1 2.25 2 6 2c3.518 0 6-1 6-2c0-2-2.354-4-6-4z"/>
  </svg>
);

const passwordSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path fill="#ffa101" d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10h12m0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"/>
  </svg>
);
const password2Svg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <path fill="#ffa101" d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"/></svg>
);
// ... (rest of the code remains the same)

function Register() {
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMatch(e.target.value === confirmPassword); // Check password match
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password); // Check password match
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const isFormValid = () => {
    return (
      firstName !== '' &&
      lastName !== '' &&
      email !== '' &&
      password !== '' &&
      confirmPassword !== '' &&
      gender !== '' &&
      passwordMatch
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>Be your own cook!</div>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.input}>
          {userSvg}
          <Textbox type="text" placeholder="First Name" value={firstName} onChange={handleFirstNameChange} />
        </div>
        <div className={styles.input}>
          <Textbox type="text" placeholder="Last Name" value={lastName} onChange={handleLastNameChange} />
        </div>
        <div className={styles.input}>
          <Countries />
        </div>
        <div className={styles.input}>
          {emailSvg}
          <Textbox type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        </div>
        <div className={styles.input}>
          {passwordSvg}
          <Textbox type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
        </div>
        <div className={styles.input}>
          {password2Svg}
          <Textbox type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          {!passwordMatch && <p>Passwords do not match</p>}
        </div>
      </div>
      <div className={styles['gender-selection']}>
        <label>
          <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
          Female
        </label>
      </div>
      <div className={styles['submit-container']}>
        <Link to="/nopage">
          <Button text="Sign Up" disabled={!isFormValid()} />
        </Link>
      </div>
      <div className={styles['login-link']}>
        Already have an account? <Link to="/login">Log in</Link>
      </div>
    </div>
  );
}

export default Register;
