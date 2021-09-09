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
            src={tvShow.image?.original}
            onClick={() => this.handleImageClick()}
          />

          <Card.Body>
            <Card.Title>{tvShow.name}</Card.Title>
            {parse(tvShow.summary)}
            <br />
            Airing status: {tvShow.status}
            {tvShow.timeZone}
            {tvShow.schedule.time}
            <br />
            Airs on: {tvShow.schedule.days}
            <br />
            Network: {tvShow.network?.name || tvShow.webChannel.name}
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
