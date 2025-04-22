import React, { useState } from "react";
import "./Projects.css";
import projectImage1 from "./assets/proj1.jpg";
import projectImage2 from "./assets/proj2.jpg";
import projectImage3 from "./assets/proj3.jpg";

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closePopout = () => {
    setSelectedImage(null);
  };

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2>recent works.</h2>
        <a href="#all-work" className="see-all-button">
          See All Work
        </a>
      </div>
      <h3>
        Recent works of mine have been to explore conceptual advertising of
        already established intellectual properties. Click on each image to view
        them at full quality.
      </h3>
      <div className="projects-grid">
        <div
          className="project-item"
          onClick={() => handleImageClick(projectImage1)}
        >
          <img src={projectImage1} alt="Project 1" className="project-image" />
          <p>A conceptual poster for season 2 of Severance.</p>
        </div>

        <div
          className="project-item"
          onClick={() => handleImageClick(projectImage2)}
        >
          <img src={projectImage2} alt="Project 2" className="project-image" />
          <p>
            A conceptual poster for Kirby Air Riders for the Nintendo Switch 2.
          </p>
        </div>

        <div
          className="project-item"
          onClick={() => handleImageClick(projectImage3)}
        >
          <img src={projectImage3} alt="Project 3" className="project-image" />
          <p>A conceptual poster for the Vandal weapon from VALORANT.</p>
        </div>
      </div>

      {selectedImage && (
        <div className="popout" onClick={closePopout}>
          <div className="popout-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Full Quality"
              className="popout-image"
            />
            <button className="close-button" onClick={closePopout}>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
