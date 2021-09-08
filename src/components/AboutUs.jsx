import React from "react";
import "../AboutUs.css";
import AboutUsCard from "./AboutUsCard";
import data from "../teamBios.json";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="aboutus">
        <div id="aboutushead">
          <h2>Our Story</h2>
          <p>
            We Started TvRepo to solve what seemed to be a universal issue:
            remembering all the great shows your watching (or waiting to watch)!
          </p>
          <h3>Our Team</h3>
        </div>
        <div id="authorcards">
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
      </div>
    );
  }
}

export default AboutUs;
