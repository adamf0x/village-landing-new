import React from "react";
import image from "./images/4-cropped.png";
import motherInKitchen from "./images/mother-in-kitchen.png";
import hex2 from "./images/hex2.png";
import{Button} from 'react-bootstrap'

const Section = (props) => {
  return (
    <div className="sectionTwo-container-outer">
      <div className="sectionTwo-text-container">
        <h1>{props.header}</h1>
        <h2>
          {props.text}
        </h2>
      </div>
      <div className="sectionTwo-image-container">
        <img className="sectionTwo-shape-1" src={hex2} />
        <div className="sectionTwo-shape-2" />
        <div className="sectionTwo-image-background" />
        <img className="sectionTwo-image" src={props.imageSource}/>
      </div>
    </div>
  );
};

export default Section;
