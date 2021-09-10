import React from "react";
import "../AboutUs.css";
import AboutUsCard from "./AboutUsCard";
import data from "../teamBios.json";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="aboutus">
        <div id="aboutushead">
          <h2 style={{padding: "40px", fontSize: "48px",}}>Our Team</h2>
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
