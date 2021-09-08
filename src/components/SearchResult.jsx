import React from "react";
import SearchResultCard from "./SearchResultCard";

// render as many SearchResultCard's as needed based on the results data from the api
class SearchResult extends React.Component {
  render() {
    return (
      <>
        <SearchResultCard
          img="badimage"
          title="Game of Thrones"
          description="Dragons and Death"
        />
      </>
    );
  }
}

export default SearchResult;
