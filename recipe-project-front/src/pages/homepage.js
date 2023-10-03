import React from "react";
import Category from "../Components/categoryDropdown";
function Home() {
  console.log("we are in the homepage");
  return (
    <div>
      <div>
        <br/>
        <Category />
      </div>
    </div>
  );
}

export default Home;
