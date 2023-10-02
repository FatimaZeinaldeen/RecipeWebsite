import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import homepage from './pages/homepage';
import about from './pages/about';
import login from './pages/login';
import layout from './pages/layout';
import nopage from './pages/nopage';
import recipeInfo from './pages/recipeInfo';
import register from './pages/register';
const routes = () => {

  return (
    <Router>
        <layout>

        <Route exact path="/" component={homepage} />
        <Route path="/about" component={about} />
        <Route path="/login" component={login} />
        <Route path="/register" component={register} />
        <Route path="/recipe/:id" component={recipeInfo} />
        <Route  component={nopage} />
      </layout>
    </Router>
  );
}


