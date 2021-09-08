import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Navbar className="footernavbar">
          <Nav.Item>
            <Navbar.Text>{"\u00A9 2021 tvRepo, LLC"}</Navbar.Text>
          </Nav.Item>
          <Nav.Item>
            <Link to="/about">Contact Us</Link>
          </Nav.Item>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
