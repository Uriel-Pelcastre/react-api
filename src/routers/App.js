import React from "react";

import Navbar from "../components/navbar";
import Home from "../pages/home";
import About from "../pages/about";
import Error from "../pages/error";
import SingleCocktail from "../pages/singleCocktail";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LoginScreen } from "../components/auth/LoginScreen";
import Bebidas from "../pages/bebidassn";

function App() {
  return (
    <>
      <Router>
        
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={HomePage} />
          <Route path='/auth/login' component={LoginScreen} />
          <Route path='/alcohol' component={Bebidas} />

          <Route path='/kabab/:id'>
            <SingleCocktail />
          </Route>
          <Route path='*' component={Error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
