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
        <div className="hero-container-text">
          <h1>Building Better Communities</h1>
          <h2>
            Welcome to The Village App. Easily and efficiently ask for help from your personal support network and connect to a hyperlocal community.
          </h2>
        </div>
        <div className="buttons">
          <p>Download now for FREE</p>
          <div className="inner-buttons">
            <Button>
              <a href="https://apps.apple.com/ca/app/village/id1549408764"><img src={appStoreButon} width={150}></img></a>
            </Button>
            <Button> 
              <a href="http://play.google.com/store/apps/details?id=co.atomic47.village.android"><img src={googlePlayButton} width={150}></img></a>
            </Button>
          </div>
        </div>
      </div>
      <div className="hero-container-image">
        <div className="hero-image-background" />
        <img
          className="hero-image"
          src={womenOnCouch}
          width={200}
          height={200}
        ></img>
        <img className="hero-request" src={requestSample}></img>
      </div>
    </div>
  );
};

export default Hero;
