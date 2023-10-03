import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homepage";
import About from "./pages/about";
import Login from "./pages/login";
import Layout from "./pages/layout";
import NoPage from "./pages/nopage";
import RecipeInfo from "./pages/recipeInfo";
import Register from "./pages/register";

const appRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recipe/:id" element={<RecipeInfo />} />
          <Route element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default appRoutes;
