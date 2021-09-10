import React from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Shows from "./components/Shows";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import ToastMessage from "./components/ToastMessage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: {
        status: false,
        content: "",
      },
      myShows: [],
      loggedIn: false,
      loggedInUser: "",
    };
  }

  errorHandler = (error) => {
    this.setState((prevState) => ({
      error: {
        ...prevState.error,
        status: true,
        content: error.message,
      },
    }));
  };

  clearError = () => {
    this.setState((prevState) => ({
      error: {
        ...prevState.error,
        status: false,
        content: "",
      },
    }));
  };

  addShow = async (tvShow) => {
    // prevent duplicate additions
    const found = this.state.myShows.find(
      (savedShow) => savedShow.showTitle === tvShow.showTitle
    );

    if (found) {
      return;
    }

    try {
      const newArray = [...this.state.myShows, tvShow];

      this.setState({ myShows: newArray });
      this.put(newArray); // newArray??
    } catch (error) {
      this.errorHandler(error);
    }
  };

  deleteShow = async (tvShow) => {
    try {
      const newArray = this.state.myShows.filter((show) => {
        return show.showTitle !== tvShow.showTitle;
      });
      this.setState({ myShows: newArray });
      this.put(newArray);
    } catch (error) {
      this.errorHandler(error);
    }
  };

  put = async (newArray) => {
    const API = `${process.env.REACT_APP_SERVER_URL}/shows/${this.state.loggedInUser}`;
    await axios.put(API, newArray);
  };

  getUserShows = async () => {
    try {
      const API = `${process.env.REACT_APP_SERVER_URL}/shows/${this.state.loggedInUser}`;
      const results = await axios.get(API);
      this.setState({ myShows: results.data });
    } catch (error) {
      this.errorHandler(error);
    }
  };

  toggleLoginStatus = (status, email) => {
    this.setState({ loggedIn: status, loggedInUser: email });
  };

  clearShowsState = () => {
    this.setState({ myShows: [] });
  };

  render() {
    return (
      <div className="app">
        {this.state.error.status && (
          <ToastMessage
            title="error"
            body={this.state.error.content}
            show={true}
            clearError={this.clearError}
          />
        )}
        <Header loggedIn={this.state.loggedIn} />

        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/search">
              <Search errorHandler={this.errorHandler} addShow={this.addShow} />
            </Route>
            <Route path="/login">
              <Home />
              <Login toggleLoginStatus={this.toggleLoginStatus} />
            </Route>
            <Route path="/logout">
              <Home />
              <Logout
                toggleLoginStatus={this.toggleLoginStatus}
                loggedInUser={this.state.loggedInUser}
                clearShowsState={this.clearShowsState}
              />
            </Route>
            <Route path="/shows">
              <Shows
                myShows={this.state.myShows}
                deleteShow={this.deleteShow}
                getUserShows={this.getUserShows}
                loggedIn={this.state.loggedIn}
              />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
