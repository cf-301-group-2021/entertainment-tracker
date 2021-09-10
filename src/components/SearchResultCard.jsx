import parse from "html-react-parser";
import React from "react";
import { Button, Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";


class SearchResultCard extends React.Component {
  render() {
    return (
      <Container className="searchresultcard" fluid>
        <Card>
          <Card.Img variant="top" src={this.props.tvShow.showImageSmall} />
          <Card.Body style={{ overflowY: "scroll" }}>
            <Card.Title>{this.props.tvShow.showTitle}</Card.Title>
            {this.props.tvShow.showDescription ? (
              <div>{parse(this.props.tvShow.showDescription)}</div>
            ) : (
              "No description available"
            )}
          </Card.Body>
          {this.props.loggedIn ? (
            <Button
              variant="primary"
              onClick={() => this.props.addShow(this.props.tvShow)}
            >
              Add
            </Button>
          ) : <Button>Log in to add!</Button>
          }
        </Card>
      </Container>
    );
  }
}

export default SearchResultCard;
