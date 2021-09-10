import React from "react";
import { Button, Card } from "react-bootstrap";
import parse from "html-react-parser";

class ShowCard extends React.Component {
  handleImageClick = () => {
    this.props.tvShow?.officialSite &&
      window.open(this.props.tvShow.officialSite);
  };

  render() {
    const tvShow = this.props.tvShow;
    return (
      <div className="showcard">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={tvShow.showImageLarge}
            onClick={() => this.handleImageClick()}
          />

          <Card.Body>
            <Card.Title>{tvShow.showTitle}</Card.Title>
            {parse(tvShow.showDescription)}
            <br />
            Airing status: {tvShow.showStatus}
            <br />
            {tvShow.showTimezone}
            <br />
            {tvShow.showNextEpisode24HourTime}
            <br />
            Airs on: {tvShow.showNextEpisodeDayOfWeek}
            <br />
            Network: {tvShow.showNetwork}
            <br />
            <Button
              variant="danger"
              onClick={() => this.props.deleteShow(tvShow)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default ShowCard;
