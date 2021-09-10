import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import GenericCard from "./GenericCard";

// render as many SearchResultCard's as needed based on the results data from the api
class SearchPersonResult extends React.Component {
  render() {
    // if (!this.props.searchResult) {
    //   return null;
    // }
    console.log(this.props.searchResult);
    console.log(this.props.personShows);

    return this.props.searchResult ? (
      <People
        getPersonShowData={this.props.getPersonShowData}
        searchResult={this.props.searchResult}
        loggedIn={this.props.loggedIn}
      />
    ) : (
      <p>"person"</p>
    );
  }
}

class People extends React.Component {
  render() {
    console.log(this.props.searchResult);
    const result = this.props.searchResult || this.props.personShows;
    return (
      <Container className="searchresult">
        <Row xs={1} md={2} className="g-4">
          {result
            .filter((person) => person.person.image?.medium)
            .map((person, index) => {
              return (
                <Col key={index} className="col-sm-4 col-md-3">
                  <GenericCard
                    image={person.person.image.medium}
                    name={person.person.name}
                    person={person}
                    description=""
                    loggedIn={this.props.loggedIn}
                    clickHandler={this.props.getPersonShowData}
                  />
                </Col>
              );
            })}
        </Row>
      </Container>
    );
  }
}

// class PersonShows extends React.Component {
//   render() {
//     return;
//   }
// }

export default SearchPersonResult;
