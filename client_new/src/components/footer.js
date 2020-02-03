import React from "react";
import "../App.scss";

function Footer() {
  return (
    <div className="footer">
      <a
        className="footer-link"
        href="https://rebwill.github.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Rebecca Willett
      </a>{" "}
      <span className="footer-text">hopes you get *hooked* on this app. </span>
      <span className="footer-text"> Data from </span>
      <a
        className="footer-link"
        href="https://www.fishwatch.gov/developers"
        target="_blank"
        rel="noopener noreferrer"
      >
        fishwatch.gov
      </a>
      .<br />
      <span className="footer-text">
        For thorough recommendations on sustainable seafood consumption, check
        out
      </span>{" "}
      <a
        className="footer-link"
        href="https://seafood.ocean.org/seafood"
        target="_blank"
        rel="noopener noreferrer"
      >
        OceanWise
      </a>
      .
    </div>
  );
}

export default Footer;
