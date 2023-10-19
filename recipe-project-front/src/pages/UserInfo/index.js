import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import profile from "../../assets/photos/feedback&reviewsuserPhoto.jpg";
import styles from "./user.module.css";
import RecipeCard from "../../Components/RecipeCard/RecipeCard";
import Button from "../../Components/Button";
import { useNavigate } from "react-router-dom";
const UserInfo = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const userid = localStorage.getItem("userId");
  const [name, setName] = useState("");
  // const [country,setCountry]=useState("");
  const [biography, setBiography] = useState("");
  // const [countrySrc,setCountrySrc]=useState("");
  const [recipeArray, setRecipeArray] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("Edit");
  const textAreaRef = useRef(null);
  // const countryContext = require.context(
  //   "../../assets/Images/",
  //   false,
  //   /\.(png)$/ // Specify the file extension you want to include
  // );
  // const countryArray=countryContext.keys();

  // const countryImg = countryArray.filter(item => item.includes(country));
  // const countryPath="../../assets/Images/"+countryImg[0].split("/")[1];
  useEffect(() => {
    getUser();
    getRecipes();
  });
  const getUser = async () => {
    const user = await axios.get(`http://localhost:3000/User/profile/${id}`);
    setBiography(user.data.biography);
    // setCountry(user.data.country);
    setName(user.data.fullName);
    //  if (countryPath) {
    //   setCountrySrc(countryContext(countryPath));
  };
  const getRecipes = async () => {
    const response = await axios.get(`http://localhost:3000/Recipe/user/${id}`);
    setRecipeArray(response.data);
  };
  const handleEdit = () => {
    if (text === "Edit") {
      setText("Save");
      setIsEditing(true);
    } else {
      setText("Edit");
      setIsEditing(false);
    }
    if (setIsEditing) {
      updateBio();
    }
  };
  const updateBio = async () => {
    const data = {
      biography: biography,
    };
    const response = await axios.put(
      `http://localhost:3000/User/profile/update-profile/${id}`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setBiography(response.data.biography)
  };
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.profile} alt="profile" src={profile} />
        <p className={styles.name}>{name}</p>
        {/* {<img alt="country" src={countrySrc.default} />} */}
      </div>
      <div className={styles.biography}>
        <div className={styles.rowDisplay}>
          <p className={styles.name}>Biography:</p>
          {userid === id.toString() && (
            <Button text={text} onClick={handleEdit} />
          )}
        </div>
        <input
          ref={textAreaRef}
          type="textarea"
          value={biography}
          disabled={!isEditing}
          className={styles.textarea}
          onChange={(e) => setBiography(e.target.value)}
        />
      </div>
      <div className={styles.recipeDisplay}>
        <div className={styles.rowDisplay}>
          <p className={styles.specialName}>Recipes Shared:</p>
          {userid === id.toString() && (
            <Button
              text="Add Recipe!"
              onClick={() => {
                navigate(`/add-recipe/${id}`);
              }}
              id="add"
            />
          )}
        </div>
        <div className={styles.recipes}>
          {recipeArray.map((recipe) => {
            return <RecipeCard key={recipe.id} recipe={recipe} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
