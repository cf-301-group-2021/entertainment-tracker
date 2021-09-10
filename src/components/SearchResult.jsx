import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SearchResultCard from "./SearchResultCard";

// render as many SearchResultCard's as needed based on the results data from the api
class SearchResult extends React.Component {
  render() {
    return (
      <Container className="searchresult" fluid>
        <Row>
          {this.props.searchResult
            .filter((tvShow) => tvShow.showImageSmall && tvShow.showDescription)
            .map((tvShow, index) => {
              return (
                <Col key={index} className="col-sm-4 col-md-3">
                  <SearchResultCard
                    tvShow={tvShow}
                    addShow={this.props.addShow}
                    loggedInUser={this.props.loggedInUser}
                  />
                </Col>
              );
            })}
        </Row>
      </Container>
    );
  }
}

export default SearchResult;
