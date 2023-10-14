import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import About from "./pages/About-Us";
import Login from "./pages/loginpage";
import Forgot from "./pages/loginpage/forgot";
import Layout from "./pages/layout";
import NoPage from "./pages/nopage";
import RecipeInfo from "./pages/recipeInfo";
import Register from "./pages/Register";
import AddRecipe from "./pages/AddRecipe";
const appRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipe/:id" element={<RecipeInfo />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="add-recipe/:id" element={<AddRecipe />} />
          <Route element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default appRoutes;
