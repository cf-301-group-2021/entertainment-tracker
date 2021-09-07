import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Login from "./components/Login";
import Shows from "./components/Shows";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/search">
                <Search />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/shows">
                <Shows />
              </Route>
              <Route path="/about">
                <AboutUs />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
