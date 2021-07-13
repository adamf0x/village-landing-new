import React from "react";
import image from "./images/4-cropped.png";
<<<<<<< HEAD
import hex2 from "./images/hex2.png";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import Section from "./Section";
import Mailchimp from "react-mailchimp-form";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { faSign } from "@fortawesome/free-solid-svg-icons";

const url="https://weebly.us17.list-manage.com/subscribe/post?u=cc2921b149dcf4cba76383047&id=04d8e5472d"

const SectionTwo = (props) => {
  return props.slant !== "opposite" ? (
    <div className="sectionTwo-container-outer" id="your-people">
      <div className="sectionTwo-text-container">
        <h1>{props.header}</h1>
        <h2>{props.text}</h2>
=======
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
>>>>>>> master
      </div>
      <div className="sectionTwo-image-container">
        <img className="sectionTwo-shape-1" src={hex2} />
        <div className="sectionTwo-shape-2" />
        <div className="sectionTwo-image-background" />
<<<<<<< HEAD
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
=======
        <img className="sectionTwo-image" src={props.imageSource}/>
>>>>>>> master
      </div>
    </div>
  );
};

<<<<<<< HEAD
const SimpleForm = () => {
  <MailchimpSubscribe
    url={
      "https://weebly.us17.list-manage.com/subscribe/post?u=cc2921b149dcf4cba76383047&id=04d8e5472d"
    }
  ></MailchimpSubscribe>;
};

export const Signup = (props) => {
  return props.buttonColour !== "light" ? (
    <div className="mailchimp-light-container">
      <Mailchimp
        className="mailchimp-form"
        action="https://weebly.us17.list-manage.com/subscribe/post?u=cc2921b149dcf4cba76383047&id=04d8e5472d"
        fields={[
          {
            name: "EMAIL",
            placeholder: "Sign up for our newsletter",
            type: "email",
            required: true,
          },
        ]}
      />
     {/* <form className="mailchimp-form" action="https://weebly.us17.list-manage.com/subscribe/post" method="POST">
       <input type="hidden" name="u" value="cc2921b149dcf4cba76383047"/>
        <input type="hidden" name="id" value="04d8e5472d"/>
        <input name="MERGE0" id="MERGE0" type="email" required={true} placeholder="Sign up for our newsletter!"></input>
        <button>Subscribe!</button>
      </form> */}
    </div>
  ) : (
    <div className="light-button">
      <Mailchimp
        className="mailchimp-form-light"
        action="https://weebly.us17.list-manage.com/subscribe/post?u=cc2921b149dcf4cba76383047&id=04d8e5472d"
        fields={[
          {
            name: "EMAIL",
            placeholder: "Sign up for our newsletter",
            type: "email",
            required: true,
          },
        ]}
      />
       {/* <form className="mailchimp-form-light" action="https://weebly.us17.list-manage.com/subscribe/post" method="POST">
       <input type="hidden" name="u" value="cc2921b149dcf4cba76383047"/>
        <input type="hidden" name="id" value="04d8e5472d"/>
        <input name="MERGE0" id="MERGE0" type="email" required={true} placeholder="Sign up for our newsletter!"></input>
        <button>Subscribe!</button>
      </form> */}
    </div>
  );
};

export default SectionTwo;
=======
export default Section;
>>>>>>> master
