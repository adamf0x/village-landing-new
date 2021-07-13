import React from "react";
import image from "./images/4-cropped.png";
import hex from "./images/hex.png";
import hex3 from "./images/hex3.png";
import { Button } from "react-bootstrap";

const Section = (props) => {
  return (
    <div className="section-container-outer">
      <div></div>
      <div className="section-text-container">
        <h1>{props.header}</h1>
        <h2>{props.text}</h2>
        {props.flavourText && (
          <h2 className="section-flavour-text">
            <i>{props.flavourText}</i>
          </h2>
        )}
        {props.button && (
          <Button
            className="get-started-button"
            onClick={() => {
              console.log("hello");
            }}
          >
            Get Started! 
          </Button>
        )}
      </div>
      {props.shapesConfig == 1 ? (
        <div className="section-image-container">
          <img className="section-shape-1" src={hex} />
          <div className="section-shape-2" />
          <div className="section-image-background" />
          <img src={props.imageSource} className="section-image" />
        </div>
      ) : (
        <div className="section-image-container">
          <img className="section-shape-1-low" src={hex3} />
          <div className="section-shape-2-cyan" />
          <div className="section-image-background" />
          <img src={props.imageSource} className="section-image" />
        </div>
      )}
    </div>
  );
};

export default Section;
