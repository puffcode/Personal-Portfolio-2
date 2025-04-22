import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Aaron Richards. All rights reserved.
      </p>
      <div className="footer-links">
        <a
          href="https://github.com/puffcode"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/aaron-richards-b2a8b0330"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:puffdesignco@gmail.com">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
