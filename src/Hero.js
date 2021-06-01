import React from "react";
import image from "./images/4-cropped.png";
import motherInKitchen from "./images/mother-in-kitchen.png";

const Hero = (props) => {
  return (
    <div className="hero-container-outer">
      <div className="hero-container-text">
        <h1>
          The App For Building Better Communities
        </h1>
        <h2
        >
          Welcome to Village, The App to get you off your phone and into the
          real life.
        </h2>
      </div>
      <div className="hero-container-image">
        <div className="hero-image-background"/>
        <img className="hero-image" src={motherInKitchen} width={200} height={200}></img>
      </div>
    </div>
  );
};

export default Hero;
