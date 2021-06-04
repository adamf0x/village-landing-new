import React from "react";
import image from "./images/4-cropped.png";
import hex from "./images/hex.png";
import hex3 from "./images/hex3.png";
import { Signup } from "./SectionTwo";
import { Button } from "react-bootstrap";
import footerLogo from "./images/Village-logo-footer.png";
import { animateScroll, Events, Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Footer = (props) => {
  return (
    <div className="footer-container-outer">
      <div className="footer-text-container">
        <h1>Join the Movement</h1>
        <h2>
          Do you belive in community? Join our mailig list to receive exclusive
          updates, engage with pucoming campaigns, and be among the first to
          beta test Village's movile app!
        </h2>
      </div>
      <div className="footer-signup-container">
        <Signup buttonColour="light"></Signup>
      </div>
      <div className="footer-section-2">
        <img src={footerLogo} onClick={()=>{animateScroll.scrollToTop()}}></img>
        <div class="footer-links">
          <Link to="your-community" smooth offset={-450}>
            <button>Features</button>
          </Link>
          <Link to="team" smooth offset={-450}>
            <button>Team</button>
          </Link>
          <Link to="faq" smooth offset={-450}>
            <button>FAQ</button>
          </Link>
          <Link to="try-it" smooth offset={-450}>
            <button>Contact</button>
          </Link>
        </div>
        <div className="footer-socials">
          <button><FontAwesomeIcon icon={faFacebookF} /></button>
          <button><FontAwesomeIcon icon={faInstagram} /></button>
          <button><FontAwesomeIcon icon={faTwitter} /></button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
