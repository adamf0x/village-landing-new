import React from "react";
import image from "./images/4-cropped.png";
import hex2 from "./images/hex2.png";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const Team = (props) => {
  return (
    <div className="team-members-container-outer">
      <div className="team-members-header">
        <h1>Meet Our Team!</h1>
      </div>
      <div className="team-members-content">
        <div className="upper">
            <div className="members-large-1"></div>
            <div className="members-large-2"></div>
        </div>
        <div className="lower">
            <div className="members-small-1"></div>
            <div className="members-small-2"></div>
            <div className="members-small-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Team;
