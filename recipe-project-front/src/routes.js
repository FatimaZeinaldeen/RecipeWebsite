import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import About from './pages/about';
import Login from './pages/login';
import Layout from './pages/layout';
import NoPage from './pages/nopage';
import RecipeInfo from './pages/recipeInfo';
import Register from './pages/register';

const appRoutes = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/recipe/:id" component={RecipeInfo} />
        <Route component={NoPage} />
      </Layout>
    </Router>
  );
};
export default appRoutes;