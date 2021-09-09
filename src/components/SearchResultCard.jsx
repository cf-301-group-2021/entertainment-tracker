import React from "react";
import { Button, Card } from "react-bootstrap";
import parse from "html-react-parser";

class SearchResultCard extends React.Component {
  render() {
    return (
      <Card className="searchresultcard">
        <Card.Img variant="top" src={this.props.tvShow.image?.original} />
        <Card.Body>
          <Card.Title>{this.props.tvShow.name}</Card.Title>
          {this.props.tvShow.summary
            ? parse(this.props.tvShow.summary)
            : "No description available"}
          <Button
            variant="primary"
            onClick={() => this.props.addShow(this.props.tvShow)}
          >
            Add
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SearchResultCard;
