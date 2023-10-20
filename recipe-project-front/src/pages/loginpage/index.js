import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserIDContext from "../../Context/UserIDContext";
// This is the right code
const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const login = async () => {
    try{
      const data = {
      email: email,
      password: password,
    };
    const response = await axios.post(
      "http://localhost:3000/User/login",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);
    navigate(`/`);
    }catch (error) {
      console.error(error);
    }
    
  };
  const handleLogin = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex = /^.{8,}$/;
    if (!emailRegex.test(email) && !passRegex.test(password)) {
      document.getElementById("error").style.display = "block";
    } else {
      login();
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Welcome Back!</h1>
      <div className={styles.form}>
        {/* email */}
        <div className={styles.subflex}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={styles.icons}
            >
              <path
                fill="#ffa101"
                d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671L18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
              />
            </svg>
          </div>
          <div className={styles.textbox}>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              className={styles.Textboxx}
              placeholder="Email"
            />
          </div>
        </div>
        {/* password */}
        <div className={styles.subflex}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className={styles.icons}
            >
              <animate fill="freeze" />
              <path
                fill="#ffa101"
                d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10h12m0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"
              />
            </svg>
          </div>
          <div>
            <input
              type="text"
              onChange={(e) => setPassword(e.target.value)}
              className={styles.Textboxx}
              placeholder="Password"
            />
          </div>
        </div>
        {/* forgot password */}
        <div className={styles.forgotpass} onClick={() => navigate("/forgot")}>
          <div>Forgot password?</div>
        </div>
        {/* error */}
        <div className={styles.error} id="error" hidden>
          <p>*Invalid email or password</p>
        </div>
        {/* login buttun */}
        <div className={styles.login}>
          <button className={styles.button} onClick={handleLogin}>
            Login
          </button>
        </div>
        {/* sign up */}
        <div className={styles.subflex}>
          <p className={styles.signup}>Don't have an account? </p>
          <Link to="/register" className={styles.signuplink}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
