import { Button } from "react-bootstrap";
import React from "react";
import image from "./images/4-cropped.png";
import womenOnCouch from "./images/women-on-couch-hero.png";
import appStoreButon from "./images/AppStore-btn.png";
import googlePlayButton from "./images/PlayStore-btn.png";
import requestSample from "./images/Request-medium.png";

const Hero = (props) => {
  return (
    <div className="hero-container-outer">
      <div className="right-content">
        <div className="hero-container-text pop-in-delay-2">
          <h1>The App For Building Better Communities</h1>
          <h2>
            Welcome to Village, The App to get you off your phone and into the
            real life.
          </h2>
        </div>
        <div className="buttons pop-in-delay-2">
          <h3>Coming Soon</h3>
          <div>
            <Button disabled>
              <img src={appStoreButon} width={150}></img>
            </Button>
            <Button disabled> 
              <img src={googlePlayButton} width={150}></img>
            </Button>
          </div>
        </div>
      </div>
      <div className="hero-container-image pop-in">
        <div className="hero-image-background" />
        <img
          className="hero-image"
          src={womenOnCouch}
          width={200}
          height={200}
        ></img>
        <img className="hero-request pop-in-delay" src={requestSample}></img>
      </div>
    </div>
  );
};

export default Hero;
