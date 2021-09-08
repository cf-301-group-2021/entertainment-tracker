import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class SearchForm extends React.Component {
  render() {
    return (
      <div className="searchform">
        <h2>Search for your next show</h2>
        <Form style={{ width: "450px" }}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="TV Show title" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Genre</Form.Label>
            <Form.Control type="text" placeholder="Enter a TV Show's genre" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Actor/Actress</Form.Label>
            <Form.Control type="text" placeholder="Enter an actor or actress" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Streaming Service</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the streaming service of the show"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default SearchForm;
