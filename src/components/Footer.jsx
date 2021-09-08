import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <>
        <Navbar>
          <Navbar.Text>
            {"\u00A9 2021 AppNameHere, LLC"}
          </Navbar.Text>
          <Nav.Item>
            <Link to="/about">Contact Us</Link>
          </Nav.Item>
        </Navbar>
      </>
    );
  }
}

export default Footer;
