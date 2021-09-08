import React from "react";
import Card from "react-bootstrap/Card";

class ShowCard extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={this.props.tvShow.img} />
        <Card.Body>
          <Card.Title>{this.props.tvShow.title}</Card.Title>
          <Card.Text>{this.props.tvShow.description}</Card.Text>
          <Card.Text>{this.props.tvShow.status}</Card.Text>
          <Card.Text>{this.props.tvShow.timeZone}</Card.Text>
          <Card.Text>{this.props.tvShow.time}</Card.Text>
          <Card.Text>{this.props.tvShow.nextEpisode}</Card.Text>
          <Card.Text>{this.props.tvShow.network}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default ShowCard;
