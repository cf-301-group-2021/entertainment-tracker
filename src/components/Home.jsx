import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <section className="welcome">Welcome to tvRepo!</section>
        <section className="welcomedesc">
          <p>
            You want to find and watch the very best in television
            entertainment. tvRepo is here to help!
          </p>
          <p>
            We started tvRepo to solve what seemed to be a universal issue:
            remembering all the great shows you&apos;re watching (or waiting to
            watch)!
          </p>
        </section>
      </div>
    );
  }
}

export default Home;
