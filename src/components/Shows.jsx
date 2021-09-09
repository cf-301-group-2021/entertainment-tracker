import React from "react";
import ShowCard from "./ShowCard.jsx";

class Shows extends React.Component {
  render() {
    return (
      <div className="shows">
        {this.props.myShows &&
          this.props.myShows.map((show, index) => {
            return (
              <ShowCard
                tvShow={show}
                key={index}
                deleteShow={this.props.deleteShow}
              />
            );
          })}
      </div>
    );
  }
}

export default Shows;
