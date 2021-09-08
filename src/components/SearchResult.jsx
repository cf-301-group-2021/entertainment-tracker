import React from "react";
import SearchResultCard from "./SearchResultCard";

// render as many SearchResultCard's as needed based on the results data from the api
class SearchResult extends React.Component {
  render() {
    return (
      <div className="searchresult">
        <SearchResultCard
          img={this.props.tvShow.img}
          title={this.props.tvShow.title}
          description={this.props.tvShow.description}
        />
      </div>
    );
  }
}

export default SearchResult;
