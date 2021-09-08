import React from "react";
import AboutUsCard from "./AboutUsCard";
import data from "../teamBios.json";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="aboutus">
        <h2>Our Story</h2>
        <p>Some fun text about our peeps</p>
        <h3>Our Team</h3>
        {data.authors.map((author, index) => {
          return (
            <AboutUsCard
              key={index}
              img={author.img}
              name={author.name}
              bio={author.bio}
            />
          );
        })}
      </div>
    );
  }
}

export default AboutUs;
