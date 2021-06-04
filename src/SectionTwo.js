import React from "react";
import image from "./images/4-cropped.png";
import hex2 from "./images/hex2.png";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import Section from "./Section";

const SectionTwo = (props) => {
  return props.slant !== "opposite" ? (
    <div className="sectionTwo-container-outer-opposite" id="your-people">
      <div className="sectionTwo-text-container">
        <h1>{props.header}</h1>
        <h2>{props.text}</h2>
      </div>
      <div className="sectionTwo-image-container">
        <img className="sectionTwo-shape-1" src={hex2} />
        <div className="sectionTwo-shape-2" />
        <div className="sectionTwo-image-background" />
        <img className="sectionTwo-image" src={props.imageSource} />
      </div>
    </div>
  ) : (
    <div className="sectionTwo-container-outer">
      <div className="sectionTwo-text-container">
        <h1>{props.header}</h1>
        <h2>{props.text}</h2>
        {props.type == "signup" && (
          <div class="signup-container">
            <Signup/>
          </div>
        )}
      </div>
      <div className="sectionTwo-image-container">
        <div className="sectionTwo-image-background" />
        <img className="sectionTwo-image" src={props.imageSource} />
      </div>
    </div>
  );
};

export const Signup = (props) => {
  return (
    <InputGroup>
      <FormControl
        className="input-area"
        placeholder="Sign up to our newsletter"
        aria-label="Sign up"
        aria-describedby="basic-addon1"
      />
      <InputGroup.Append>
        {props.buttonColour === "light"?
        <Button
          className="signup-button-light"
          onClick={() => {
            console.log("hello");
          }}
        >
          Sign up
        </Button>:
        <Button
        className="signup-button"
        onClick={() => {
          console.log("hello");
        }}
      >
        Sign up
      </Button>}
      </InputGroup.Append>
    </InputGroup>
  );
};

export default SectionTwo

