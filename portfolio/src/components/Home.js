import React from "react";
import "./Home.css";
import profilePic from "./assets/puff1.jpg";

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-name">AARON RICHARDS</h1>
          <p className="home-email">puffdesignco@gmail.com</p>
          <p className="home-intro">
            Hello, I'm a freelance graphic and web designer specializing is a
            variety of design types including logo design, flyer design, brand
            design, etc.
          </p>
        </div>
        <div className="home-image">
          <img src={profilePic} alt="Aaron Richards" className="profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default Home;
