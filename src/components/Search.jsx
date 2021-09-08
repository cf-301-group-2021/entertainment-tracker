import React from "react";
import SearchForm from "./SearchForm.jsx";
import SearchResult from "./SearchResult.jsx";

let bool = true;
const tvShow = {
  img: "img",
  title: "Game of thrones",
  description: "dragons and death",
};

class Search extends React.Component {
  render() {
    return (
      <>
        <SearchForm />
        {bool ? (
          <SearchResult tvShow={tvShow} />
        ) : (
          <p>no search results because this is false</p>
        )}
      </>
    );
  }
}

export default Search;
