import { Button } from "react-bootstrap";
import React from "react";
import image from "./images/4-cropped.png";
import womenOnCouch from "./images/women-on-couch-hero.png";
import appStoreButon from "./images/AppStore-btn.png";
import googlePlayButton from "./images/PlayStore-btn.png";
import requestSample from "./images/Request-medium.png";
import hex3 from "./images/hex3.png";
import HeroImage from "./images/Group 611.png"
import HeroImage2 from "./images/Group 559.png"

const CurbitHero = (props) => {
  return (
    <div className="curbit-hero-container-outer">
      <div className="text-content">
        <div className="curbit-hero-container-text">
          <h1>Curb It!</h1>
          <h2 className="subheader">Kick Unwated Items to the Curb!</h2>
          <h2>September 18, 2021</h2>
          <h3>9:00 AM - 3:00 PM</h3>
          <h3>Kelowna, BC</h3>
        </div>
        <div className="curbit-buttons">
          <h4>
            The Village App is excited to host Curb It; a city-wide event where
            neighbours put free items on their curb for others to pick up.
          </h4>
          <button>How To Participate</button>
        </div>
      </div>
      <div className="curbit-hero-image-container">
          <img className="curbit-hero-image-1" src={HeroImage}></img>
          <img className="curbit-hero-image-2" src={HeroImage2}></img>
      </div>
    </div>
  );
};

export default CurbitHero;
