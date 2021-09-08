import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { withRouter } from "react-router-dom";


class Login extends React.Component {

  processLogin = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    console.log(process.env.REACT_APP_SERVER_URL + "/login");

    // todo: probably want a cross-component auth check utility

    try {
      const response = await axios
        .post(process.env.REACT_APP_SERVER_URL + "/login", {
          data: { email, password },
        });

      console.log(response);
    } catch (error) {
      console.log("test");
      console.error(error);
    }

    this.navigateToShowsPage();
  };

  navigateToHomePage = () => this.props.history.push("/");

  navigateToShowsPage = () => this.props.history.push("/shows");

  /**
   * On cancel click, navigate to /home.
   * On login, process login with backend.
   * On error, toast message, don't navigate.
   * On success, navigate to /shows.
   * @returns {JSX.Element}
   */
  render() {
    return (
      <Modal
        size="lg"
        show={true}
        onHide={this.navigateToHomePage}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Account Login
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.processLogin}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control required type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control required type="password" />
            </Form.Group>
            <Row>
              <Col>
                <Button variant="primary" type="submit">
                  Login or Create Account
                </Button>
              </Col>
              <Col>
                {/*<Link to="/" className="nav-link">Cancel</Link>*/}
                <Button variant="secondary" onClick={this.navigateToHomePage}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

export default withRouter(Login);
