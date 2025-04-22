import React from "react";
import "./About.css";
import aboutImg from "./assets/puff2.jpg";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-extra-info">
        <h2>about.</h2>
        <p>
          From concept to reality, I work with entities ranging from a single
          person up to a fully established business to help bring their visions
          to life.
        </p>
      </div>

      <div className="about-image">
        <img src={aboutImg} alt="A large rectangular representation of me" />
      </div>

      <div className="about-more-info">
        <p>
          I’m dedicated to crafting beautiful and highly functional designs that
          seamlessly align with my clients' unique needs and long-term goals.
          <br />
          My skills include proficiency in Adobe Creative Suite, Figma, Blender,
          and a strong understanding of design principles, typography, and
          color. I have a keen eye for detail and a passion for creating
          visually stunning designs that not only look great but also
          effectively communicate the intended message.
        </p>
      </div>
    </div>
  );
};

export default About;
