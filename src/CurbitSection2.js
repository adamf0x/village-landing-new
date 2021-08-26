import { Button } from "react-bootstrap";
import React from "react";
import image from "./images/4-cropped.png";
import womenOnCouch from "./images/women-on-couch-hero.png";
import appStoreButon from "./images/AppStore-btn.png";
import googlePlayButton from "./images/PlayStore-btn.png";
import requestSample from "./images/Request-medium.png";
import iphoneMock1 from "./images/Group 612.png";
import iphoneMock2 from "./images/Group 600.png";
import sectionImage from "./images/Group 607.png";

const CurbitSection2 = (props) => {
  return (
    <div className="curbit-section1-container-outer">
      {props.noPicture ? (
        <>
          <div className="curbit-section-header">
            <h1>When & Where</h1>
            <h2>September 18, 2021</h2>
            <h3>9:00 AM - 3:00 PM</h3>
            <h3>Kelowna, BC</h3>
          </div>
          <div className="curbit-image-flex">
            <img className="mobile-image" src={iphoneMock1}></img>
          </div>
          <div className="curbit-section-container-1">
            <div className="curbit-section-text">
              <h1 className="list-header">{props.headerText}</h1>
              <div>
                <h4>As a Giver:</h4>
                <ol>
                  <li>
                    <h3>
                      Download The Village App before the event to get to know
                      how it works and start meeting your neighbors.
                    </h3>
                  </li>
                  <li>
                    <h3>
                      On September 18 place clearly marked free items on your
                      curb starting at 9am. Download printable sign here.
                    </h3>
                  </li>
                  <li>
                    <h3>
                      Start an Offer and choose “Broadcast” in The Village App
                      to let neighbors know you have multiple items available.
                      See how here.
                    </h3>
                  </li>
                  <li>
                    <h3>
                      For more specific items (ei: you have one toaster), Start
                      an Offer and choose “Free Stuff” in The Village App to let
                      neighbors know you have a specific item available which
                      allows someone to claim it before seeing it. See how here.
                    </h3>
                  </li>
                </ol>
                <h3>
                  <i>
                    Note: You do not have to use your exact address. A postal
                    code, street name, neighborhood or other descriptor works.
                  </i>
                </h3>
                <h4>As a Receiver:</h4>
                <ol>
                  <li>
                    <h3>
                      Download The Village App before the event to get to know
                      how it works and start meeting your neighbors.
                    </h3>
                  </li>
                  <li>
                    <h3>
                      On September 18th have your push notifications turned on
                      so you can see where items are being curbed and pick up
                      new-to-you treasures.
                    </h3>
                  </li>
                  <li>
                    <h3>
                      We encourage everyone to stay in their own neighborhood
                      and get to know each other.
                    </h3>
                  </li>
                </ol>
                <h3>
                  <i>
                    Have left over items? No problem. Check out our partners
                    below to see where you can bring items to be donated.
                  </i>
                </h3>
              </div>
            </div>
            <img className="desktop-image" src={iphoneMock2}></img>
          </div>
        </>
      ) : (
        <div className="curbit-section-container-2">
          <div className="curbit-image-flex-2">
            <img className="section2-image" src={sectionImage}></img>
          </div>
          <div className="curbit-section-text">
            <h1 className="list-header">{props.headerText}</h1>
            <ol>
              <li>
                <h4>As easy as one, two, free!</h4>
                <h3>
                  All items must be clearly marked free and in clean, usable
                  condtiion. Download printable sign here. If display tables or
                  bins are not free, download this printable here.
                </h3>
              </li>
              <li>
                <h4>Curb it... until 3pm</h4>
                <h3>
                  All items need to be off your curb by 3pm September18th. We
                  don;t need racoons making off with grandma's quilt. If you
                  have items leftover check out our partners listed below for
                  accepted donations.
                </h3>
              </li>
              <li>
                <h4>R-E-S-P-E-C-T</h4>
                <h3>
                  Respect that you are on or near someone's property. Be aware
                  of where you are stepping or parking. No flowers should be
                  harmed in the making of this event.
                </h3>
              </li>
              <li>
                <h4>Don't be a walk blocker</h4>
                <h3>
                  Items and vehicles can't obstruct the sidewalk or roadways.
                </h3>
              </li>
              <li>
                <h4>Talk to strangers</h4>
                <h3>
                  Use this time to talk to other people in your community during
                  the event, get to know your neighbours and show gratitude for
                  your sweet find if the homeowner is there.
                </h3>
              </li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurbitSection2;
