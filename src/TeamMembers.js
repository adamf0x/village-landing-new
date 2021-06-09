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
          <div></div>
          <div className="members-large-1">
            <a href="https://www.linkedin.com/in/ashley-stone-390380114/">
              <img className="member-large" src={teamMemberLarge}></img>
              <h1>Ashley Stone</h1>
            </a>
            <h2>CEO/Founder</h2>
          </div>
          <div className="members-large-2">
            <a href="https://www.linkedin.com/in/karen-o-941a469/">
              <img className="member-large" src={teamMemberLarge}></img>
              <h1>Karen Olsson</h1>
            </a>
            <h2>COO/CEO of Atomic47</h2>
          </div>
        </div>
        <div className="lower">
          <div className="members-small-1">
            <a href="https://www.linkedin.com/in/nick-prouten/">
              <img className="member-small" src={teamMemberSmall}></img>
              <h1>Nicholas Prouten</h1>
            </a>
            <h2>Product Manager</h2>
          </div>
          <div className="members-small-2">
            <a href="https://www.linkedin.com/in/michaeldonharris/">
              <img className="member-small" src={teamMemberSmall}></img>
              <h1>Michael Harris</h1>
            </a>
            <h2>Business Analyst</h2>
          </div>
          <div className="members-small-3">
            <a href="https://www.linkedin.com/in/donovan-rogall-9790208/">
              <img className="member-small" src={teamMemberSmall}></img>
              <h1>Donovan Rogall</h1>
            </a>
            <h2>Head of Technical Team</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
