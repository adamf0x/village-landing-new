import { Button } from "react-bootstrap";
import React from "react";
import image from "./images/4-cropped.png";
import womenOnCouch from "./images/women-on-couch-hero.png";
import appStoreButon from "./images/AppStore-btn.png";
import googlePlayButton from "./images/PlayStore-btn.png";
import requestSample from "./images/Request-medium.png";

const Partners = (props) => {
  return (
    <div className="partners-container-outer">
      <div className="partners-header">
        <h1>Partners</h1>
      </div>
      <div className='partners-body'>
        {props.partners.map((partner) => (
          <div className="partner-container">
            <img className="logo" src={partner.logo}></img>
            <div className="partner-information">
              <div className="address">
                <h3>
                  <strong>{partner.name}</strong>
                  <br></br>
                  {partner.addressline1}
                  <br></br>
                  {partner.addressline2}
                  <br></br>
                  {partner.addressline3}
                </h3>
              </div>
              <div className="description">
                <h3>{partner.description}</h3>
              </div>
              <div className="needs">
                <h3>Current Needs:</h3>
                <h3>{partner.needs}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
