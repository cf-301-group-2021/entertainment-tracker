import React from "react";
import Card from "react-bootstrap/Card";
import parse from "html-react-parser";

class SearchResultCard extends React.Component {
  render() {
    return (
      <div className="searchresultcard">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.img} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{parse(this.props.description)}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default SearchResultCard;
