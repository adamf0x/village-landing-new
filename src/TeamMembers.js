import React from "react";
import image from "./images/4-cropped.png";
import hex2 from "./images/hex2.png";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import teamMemberLarge from "./images/Placeholder-Teal.png";
import teamMemberSmall from "./images/Placeholder-Orange.png";

const Team = (props) => {
  return (
    <div className="team-members-container-outer">
      <div className="team-members-header">
        <h1>Meet Our Team!</h1>
      </div>
      <div className="team-members-content">
        <div className="upper">
          <div>
          </div>
          <div className="members-large-1">
            <img className="member-large" src={teamMemberLarge}></img>
            <h1>
              Ashley Stone
            </h1>
            <h2>
              CEO/Founder
            </h2>
          </div>
          <div className="members-large-2">
            <img className="member-large" src={teamMemberLarge}></img>
            <h1>
              Karen Olsson
            </h1>
            <h2>
              COO/CEO of Atomic47
            </h2>
          </div>
        </div>
        <div className="lower">
          <div className="members-small-1">
            <img className="member-small" src={teamMemberSmall}></img>
            <h1>
              Nicholas Prouten
            </h1>
            <h2>
              Product Manager
            </h2>
          </div>
          <div className="members-small-2">
            <img className="member-small" src={teamMemberSmall}></img>
            <h1>
              Michael Harris
            </h1>
            <h2>
              Business Analyst
            </h2>
          </div>
          <div className="members-small-3">
            <img className="member-small" src={teamMemberSmall}></img>
            <h1>
              Donovan Rogall
            </h1>
            <h2>
              Head of Technical Team
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
