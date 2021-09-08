import React from "react";
import SearchForm from "./SearchForm.jsx";
import SearchResult from "./SearchResult.jsx";

let bool = true;

class Search extends React.Component {
  render() {
    return (
      <>
        <SearchForm />
        {bool ? (
          <SearchResult />
        ) : (
          <p>no search results because this is false</p>
        )}
      </>
    );
  }
}

export default Search;
