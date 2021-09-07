import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              Home
            </Route>
            <Route path="/search">
              Search
            </Route>
            <Route path="/login">
              Login
            </Route>
            <Route path="/shows">
              Shows
            </Route>
            <Route path="/about">
              About Us
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
