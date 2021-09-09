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

  addShow = (tvShow) => {
    this.setState({ myShows: [...this.state.myShows, tvShow] });
  };

  deleteShow = (tvShow) => {
    console.log("deleted");
    this.setState({
      myShows: this.state.myShows.filter((show) => {
        return show.name !== tvShow.name;
      }),
    });
  };

  render() {
    return (
      <div className="app">
        <Router>
          {this.state.error.status && (
            <ToastMessage
              title="error"
              body={this.state.error.content}
              show={true}
              clearError={this.clearError}
            />
          )}
          <Header />

          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/search">
                <Search
                  errorHandler={this.errorHandler}
                  addShow={this.addShow}
                />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/shows">
                <Shows
                  myShows={this.state.myShows}
                  deleteShow={this.deleteShow}
                />
              </Route>
              <Route path="/about">
                <AboutUs />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
