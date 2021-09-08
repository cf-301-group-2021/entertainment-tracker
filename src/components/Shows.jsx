import React from "react";
import ShowCard from "./ShowCard.jsx";

const tvShow = {
  title: "Game of thrones",
  description: "dragons and death",
  status: "ended",
  timeZone: "west",
  time: "11am",
  nextEpisode: "never",
  network: "HBO",
};

class Shows extends React.Component {
  render() {
    return (
      <>
        <ShowCard tvShow={tvShow} />
      </>
    );
  }
}

export default Shows;
