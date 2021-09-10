import React from "react";
import SearchResultCard from "./SearchResultCard";

// render as many SearchResultCard's as needed based on the results data from the api
class SearchResult extends React.Component {
  render() {
    return (
      <div className="searchresult">
        {this.props.searchResult
          .filter((tvShow) => tvShow.showImageSmall && tvShow.showDescription)
          .map((tvShow, index) => {
            return (
              <SearchResultCard
                key={index}
                tvShow={tvShow}
                addShow={this.props.addShow}
              />
            );
          })}
      </div>
    );
  }
}

export default SearchResult;
