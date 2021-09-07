import React from "react";
import AboutUsCard from "./AboutUsCard";

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <h2>Our Story</h2>
        <p>Some fun text about our peeps</p>
        <h3>Our Team</h3>
        <AboutUsCard img="img" name="name" bio="bio" />
      </>
    );
  }
}

export default AboutUs;
