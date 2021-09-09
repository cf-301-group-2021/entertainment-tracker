import React from "react";
import ShowCard from "./ShowCard.jsx";
import { Link } from "react-router-dom";

class Shows extends React.Component {
  componentDidMount() {
    this.props.myShows.length > 0 &&
      this.props.loggedIn &&
      this.props.getUserShows();
  }

  render() {
    return (
      <div className="shows">
        {this.props.myShows.length > 0 ? (
          this.props.myShows.map((show, index) => {
            return (
              <ShowCard
                tvShow={show}
                key={index}
                deleteShow={this.props.deleteShow}
              />
            );
          })
        ) : (
          <div className="noShowsParent">
            <div className="noShowsChild">
              <h4>
                Add your favorite shows in <Link to="/search">search</Link> to
                get started!
              </h4>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Shows;
