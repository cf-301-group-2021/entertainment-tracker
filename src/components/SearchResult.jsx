import React from "react";
import SearchResultCard from "./SearchResultCard";

// render as many SearchResultCard's as needed based on the results data from the api
class SearchResult extends React.Component {
  render() {
    const searchResult = this.props.searchResult;
    return (
      <div className="searchresult">
        {searchResult.map((show, index) => {
          return (
            <SearchResultCard
              key={index}
              img={show.show.image?.original}
              title={show.show.name}
              description={show.show.summary ?? "no description available"}
            />
          );
        })}
      </div>
    );
  }
}

export default SearchResult;
