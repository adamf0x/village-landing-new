import React from "react";
import image from "./images/4-cropped.png";
import hex2 from "./images/hex2.png";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import Section from "./Section";
import Mailchimp from "react-mailchimp-form"

const SectionTwo = (props) => {
  return props.slant !== "opposite" ? (
    <div className="sectionTwo-container-outer" id="your-people">
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
    <div className="sectionTwo-container-outer-opposite">
      <div className="sectionTwo-text-container">
        <h1>{props.header}</h1>
        <h2>{props.text}</h2>
        {props.type == "signup" && (
          <div className="signup-container">
            <Signup />
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
    props.buttonColour !== "light"?
    <Mailchimp
        className="mailchimp-form"
        action="https://weebly.us17.list-manage.com/subscribe/post?u=cc2921b149dcf4cba76383047&id=04d8e5472d"
        fields={[
          {
            name: "EMAIL",
            placeholder: "Sign up to our newsletter",
            type: "email",
            required: true,
          },
        ]}
      />:
      <div className="light-button">
      <Mailchimp
      className="mailchimp-form-light"
      action="https://weebly.us17.list-manage.com/subscribe/post?u=cc2921b149dcf4cba76383047&id=04d8e5472d"
      fields={[
        {
          name: "EMAIL",
          placeholder: "Sign up to our newsletter",
          type: "email",
          required: true,
        },
      ]}
    />
    </div>
  );
};

export default SectionTwo;
