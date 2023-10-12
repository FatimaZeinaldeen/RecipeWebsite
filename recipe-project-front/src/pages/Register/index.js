import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import Countries from "../../Components/CountryDropDown";
import styles from "./register.module.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// Define the SVG constants
const emailSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.5em" viewBox="0 0 24 24">
    <path fill="#ffa101" d="M22 5.5H9c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h13c1.11 0 2-.89 2-2v-9a2 2 0 0 0-2-2m0 11H9V9.17l6.5 3.33L22 9.17v7.33m-6.5-5.69L9 7.5h13l-6.5 3.31"/>
  </svg>
);

const userSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.5em" viewBox="0 0 24 24">
    <path fill="#ffa101" d="M12 6c1.654 0 3 1.346 3 3s-1.346 3-3 3s-3-1.346-3-3s1.346-3 3-3m0-2C9.236 4 7 6.238 7 9s2.236 5 5 5s5-2.238 5-5s-2.236-5-5-5zm0 13c2.021 0 3.301.771 3.783 1.445c-.683.26-1.969.555-3.783.555c-1.984 0-3.206-.305-3.818-.542C8.641 17.743 9.959 17 12 17m0-2c-3.75 0-6 2-6 4c0 1 2.25 2 6 2c3.518 0 6-1 6-2c0-2-2.354-4-6-4z"/>
  </svg>
);

const passwordSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.5em" viewBox="0 0 24 24">
    <path fill="#ffa101" d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10h12m0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"/>
  </svg>
);
const password2Svg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.5em" viewBox="0 0 24 24">
    <path fill="#ffa101" d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"/></svg>
);
// ... (rest of the code remains the same)

function Register() {
  const navigate = useNavigate();
  const [emptyForm, setEmptyForm] = useState('');
  const [gender, setGender] = useState('');
  const [emptyGender, setEmptyGender] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [emptyfirstName, setEmptyFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emptylastName, setEmptyLastName] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [country, setCountry] = useState("");
  const [emptyCountry, setEmptyCountry] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

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

  const handleCountrySelect = (selectedCountry) => {
    setCountry(selectedCountry);
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
      firstName === '' &&
      lastName === '' &&
      email === '' &&
      password === '' &&
      confirmPassword === '' &&
      gender === '' 
    );
  };

  const handleSignup = async () => {
    if (isFormValid()) {
      setEmptyForm('Please fill out the form to register.')
      return;
    }else {
      setEmptyForm('');
    }
    if (firstName.trim() === '') {
      setEmptyFirstName('First Name is required');
      return; 
    } else {
      setEmptyFirstName('');
    }
    if (lastName.trim() === '') {
      setEmptyLastName('Last Name is required');
      return; 
    } else {
      setEmptyLastName('');
    }
    if (!gender) {
      setEmptyGender('Please select a gender'); 
      return;
    } else {
      setEmptyGender('');
    }
    if (!country) {
      setEmptyCountry('Please select a country'); 
      return;
    } else {
      setEmptyCountry('');
    }
    if (email.trim() === '') {
      setEmailError('Email is required');
      return;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setEmailError('Invalid email format'); 
      return;
    } else {
      setEmailError(''); 
    }
    if (password.length < 8) {
      setPasswordErrorMessage("Password must be at least 8 characters long");
      return;
    }else {
      setPasswordErrorMessage('');
    }
  
    try {
      const fullNameComb = `${firstName} ${lastName}`;
      const data = {
        fullName: fullNameComb,
        email:email,
        password:password,
        gender:gender,
        country:country
      };
      const jsonData = JSON.stringify(data);
      console.log(jsonData);
      const response = await axios.post("http://localhost:3000/User/register", data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
      navigate('/loginpage');
    } catch (error) {
      console.error(error);
    }
  }
  return (
  <div className={styles.container}>
    <div className={styles.header}>
        <p className={styles.text}>Be your own cook!</p>
        {emptyForm && <p style={{color:'#153040',fontSize:'25px'}} >{emptyForm}</p>}
    </div>

    <div className={styles.allinputs}>
      <div className={styles.firstlastGenderCountry}>
        <div className={styles.fname}>
            {userSvg}
            <input  className={styles.firstname} type="text" value={firstName} onChange={handleFirstNameChange} placeholder="First Name"/>
            {emptyfirstName && <p style={{color:'red'}} >{emptyfirstName}</p>}
        </div>
        <div className={styles.lname}>
           <input  className={styles.lastname} type="text" value={lastName} onChange={handleLastNameChange} placeholder="Last Name"/>
           {emptylastName && <p style={{color:'red'}} >{emptylastName}</p>}
        </div>

        <div className={styles.GenderCountry}>
          <div className={styles.genderSelection}>
             <label>
               <input type="radio" name="gender" value="M" onChange={handleGenderChange} style={{ marginLeft: '-8px', width: '15px', height: '15px'}}/>
                Male
             </label>
             <label>
               <input type="radio" name="gender" value="F"  onChange={handleGenderChange} style={{ width: '15px', height: '15px' }}/>
                Female
             </label>
             {emptyGender && <p style={{color:'red'}} >{emptyGender}</p>}
          </div>
          <div className={styles.countries}>
            <Countries onSelect={handleCountrySelect} />
          </div>
          {emptyCountry && <p style={{ color: 'red' }}>{emptyCountry}</p>}
        </div> 
      </div>
      <div className={styles.emailpassPasscheck}>
        <div className={styles.emailS}>
          {emailSvg}
          <input  className={styles.email} type="email" value={email} onChange={handleEmailChange} placeholder="Email"/>
          {emailError && <p style={{color:'red'}} >{emailError}</p>}
        </div>
        <div className={styles.passwordS}>
          {passwordSvg}
          <input  className={styles.password} type="password" value={password} onChange={handlePasswordChange} placeholder="Password"/>
        </div>
       < div className={styles.passwordcheckS}>
          {password2Svg}
          <input  className={styles.passwordcheck} type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder="Confirm Password"/>
          {!passwordMatch && <p>Passwords do not match</p>}
          {password.length < 8 && (<p style={{color:'red'}}>{passwordErrorMessage}</p>)}
        </div>
      </div>
    </div>  
    <div className={styles.submitcontainer}>
          <button className={styles.button} onClick={handleSignup}>
            Sign Up
          </button>
    </div>
    <div className={styles.haveacc}>
        Already have an account? <Link to="/loginpage" className={styles.loginlink} >Log in</Link>
    </div>
 </div>
  );
}

export default Register;