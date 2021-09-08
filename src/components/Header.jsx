import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Navbar>
          <Nav.Item>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/search" className="nav-link">
              Search
            </Link>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/shows" className="nav-link">
              Shows
            </Link>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </Nav.Item>
        </Navbar>
      </div>
    );
  }
}

export default Header;
