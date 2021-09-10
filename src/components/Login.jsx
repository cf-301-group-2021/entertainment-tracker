import axios from "axios";
import React from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  processLogin = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    // todo: probably want a cross-component auth check utility

    try {
      await axios.post(process.env.REACT_APP_SERVER_URL + "/login", {
        data: { email, password },
      });
      this.props.toggleLoginStatus(true, email);
    } catch (error) {
      console.error(error);
    }

    this.navigateBack();
  };

  navigateBack = () => this.props.history.goBack();

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
        onHide={this.navigateBack}
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
