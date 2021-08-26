import { Button } from "react-bootstrap";
import React from "react";
import image from "./images/4-cropped.png";
import womenOnCouch from "./images/women-on-couch-hero.png";
import appStoreButon from "./images/AppStore-btn.png";
import googlePlayButton from "./images/PlayStore-btn.png";
import requestSample from "./images/Request-medium.png";

const CurbitSection1 = (props) => {
  return (
    <div className="curbit-section1-container-outer">
      <div className="curbit-section-header">
        <h1>When & Where</h1>
        <h2>September 18, 2021</h2>
        <h3>9:00 AM - 3:00 PM</h3>
      </div>
      <div curbit-section-image>
        <img></img>
        <img></img>
      </div>
    </div>
  );
};

export default CurbitSection1;
