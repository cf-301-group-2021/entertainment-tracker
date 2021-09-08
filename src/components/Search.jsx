import React from "react";
import SearchForm from "./SearchForm.jsx";
import SearchResult from "./SearchResult.jsx";
import axios from "axios";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTitle: "",
      searchResult: "",
    };
  }

  getShowData = async (title) => {
    try {
      // don't call API on empty form submissions
      if (title === this.state.searchTitle) {
        return;
      }
      console.log("hitting API");

      const API = `https://cf301-2021.herokuapp.com/search/shows/${title}`;
      const results = await axios.get(API);
      this.setState({ searchTitle: title, searchResult: results.data });
      console.log("hit API");
    } catch (error) {
      //TODO: better error handling; render an error
      this.props.errorHandler(error);
      this.setState({ searchResult: "", searchTitle: "" });
    }
  };

  render() {
    return (
      <div className="search">
        <SearchForm getShowData={this.getShowData} />

        {this.state.searchResult ? (
          <SearchResult searchResult={this.state.searchResult} />
        ) : null}
      </div>
    );
  }
}

export default Search;
