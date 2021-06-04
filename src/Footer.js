import React from "react";
import image from "./images/4-cropped.png";
import hex from "./images/hex.png";
import hex3 from "./images/hex3.png";
import { Signup } from "./SectionTwo";
import { Button } from "react-bootstrap";

const Footer = (props) => {
  return (
    <div className="footer-container-outer">
      <div className="footer-text-container">
        <h1>Join the Movement</h1>
        <h2>
          Do you belive in community? Join our mailig list to receive exclusive
          updates, engage with pucoming campaigns, and be among the first to
          beta test Village's movile app!
        </h2>
      </div>
      <div className="footer-signup-container">
        <Signup buttonColour="light"></Signup>
      </div>
      <div className="footer-section-2">

      </div>
    </div>
  );
};

export default Footer;
