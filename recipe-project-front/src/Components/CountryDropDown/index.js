import React from "react";
import { useState } from "react";
import styles from "./dropdown.module.css";
function Countries(props) {
  const [isClicked, setIsClicked] = useState(false);
  const handleDropdownClick = () => {
    setIsClicked(true);
  };
  const countryContext = require.context(
    "../../assets/Images/",
    false,
    /\.(png)$/ // Specify the file extension you want to include
  );
  const countryArray=countryContext.keys();
  const countryNames=countryArray.map((country)=>{
    return(
        country.split("/")[1].split(".")[0].split("-")[1]
    )
  })
  const handleCountryChange = (e) => {
    // Get the selected value and pass it to the parent component
    const selectedCountry = e.target.value;
    props.onSelect(selectedCountry);
  };
  return (
    <div>
      <form>
        <select
          id="select"
          name="Country"
          title="Country"
          className={`${styles.dropdown} ${isClicked ? styles.clicked : ""}`}
          onClick={handleDropdownClick}
          onChange={handleCountryChange}
        >
          <option className={styles.options} value="Category" hidden>
            Country
          </option>
          {countryNames.map((country) => (
        <option className={styles.options} value={country}>
            <p>{country}</p>
        </option>
    ))}
        </select>
      </form>
    </div>
  );
}

export default Countries;
