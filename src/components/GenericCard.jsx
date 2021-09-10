import parse from "html-react-parser";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class GenericCard extends React.Component {
  render() {
    return (
      <Card className="searchresultcard">
        <Card.Img variant="top" src={this.props.image} />
        <Card.Body style={{ overflowY: "scroll" }}>
          <Card.Title>{this.props.name}</Card.Title>
          {this.props.description ? (
            <div>{parse(this.props.description)}</div>
          ) : (
            ""
          )}
        </Card.Body>
        <Button
          onClick={() => {
            console.log("show related tv shows");
            this.props.clickHandler(this.props.person.person.id);
          }}
        >
          Show related TV Shows
        </Button>
      </Card>
    );
  }
}

export default withRouter(GenericCard);
