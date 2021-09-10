import axios from "axios";
import React from "react";
import SearchForm from "./SearchForm.jsx";
import SearchResult from "./SearchResult.jsx";
import SearchPersonResult from "./SearchPersonResult.jsx";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTitle: "",
      searchPerson: "",
      searchResult: "",
      personShows: "",
    };
  }

  getShowData = async (title) => {
    try {
      // don't call API on empty form submissions
      if (title === "") {
        throw new Error("empty sumbission field");
      } else if (title === this.state.searchTitle) {
        return;
      }

      const API = `${process.env.REACT_APP_SERVER_URL}/search/shows/${title}`;
      const results = await axios.get(API);
      results.data.splice(0, -5);
      console.log(results.data);
      this.setState({
        searchTitle: title,
        searchResult: results.data,
        searchPerson: "",
        personShows: "",
      });
    } catch (error) {
      //TODO: better error handling; render an error
      this.props.errorHandler(error);
      this.setState({ searchResult: "", searchTitle: "" });
    }
  };

  getPeopleData = async (person) => {
    try {
      const API = `https://api.tvmaze.com/search/people?q=${person}`;
      const results = await axios.get(API);
      console.log(results.data);
      this.setState({
        searchPerson: person,
        searchResult: results.data,
        searchTitle: "",
      });
    } catch (error) {
      this.props.errorHandler(error);
      this.setState({ searchResult: "", searchTitle: "" });
    }
  };

  getPersonShowData = async (personId) => {
    try {
      const API = `https://api.tvmaze.com/people/${personId}?embed=castcredits`;
      const results = await axios.get(API);
      console.log(results.data);
      results.data._embedded.castcredits.length > 0 &&
        this.setState({
          personShows: results.data._embedded.castcredits,
          searchResult: "",
        });
    } catch (error) {
      this.props.errorHandler(error);
      this.setState({
        searchResult: "",
        searchTitle: "",
        searchPerson: "",
        personShows: "",
      });
    }
  };

  render() {
    return (
      <div className="search">
        <SearchForm
          getShowData={this.getShowData}
          getPeopleData={this.getPeopleData}
        />
        {this.state.searchResult && this.state.searchPerson ? (
          this.state.personShows ? (
            <SearchPersonResult
              searchResult={this.state.searchResult}
              searchPerson={this.state.searchPerson}
              getPersonShowData={this.getPersonShowData}
              loggedIn={this.props.loggedIn}
              personShows={this.state.personShows}
            />
          ) : (
            <SearchPersonResult
              searchResult={this.state.searchResult}
              searchPerson={this.state.searchPerson}
              getPersonShowData={this.getPersonShowData}
              loggedIn={this.props.loggedIn}
            />
          )
        ) : (
          <SearchResult
            searchResult={this.state.searchResult}
            addShow={this.props.addShow}
            loggedIn={this.props.loggedIn}
          />
        )}
      </div>
    );
  }
}

export default Search;
