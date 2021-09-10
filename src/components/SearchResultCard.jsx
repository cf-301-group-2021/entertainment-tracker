import React from "react";
import { Button, Card } from "react-bootstrap";
import parse from "html-react-parser";

class SearchResultCard extends React.Component {
  render() {
    return (
      <Card className="searchresultcard">
        <Card.Img variant="top" src={this.props.tvShow.showImageSmall} />
        <Card.Body style={{ overflowY: "scroll" }}>
          <Card.Title>{this.props.tvShow.showTitle}</Card.Title>
          {this.props.tvShow.showDescription ? (
            <div>{parse(this.props.tvShow.showDescription)}</div>
          ) : (
            "No description available"
          )}
        </Card.Body>
        <Button
          variant="primary"
          onClick={() => this.props.addShow(this.props.tvShow)}
        >
          Add
        </Button>
      </Card>
    );
  }
}

export default SearchResultCard;
