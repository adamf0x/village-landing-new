import React, { useState } from "react";
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
import {Nav, Modal} from "react-bootstrap"

const Footer = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClose=()=>{
    setIsOpen(false)
  }
  const handleOpen=()=>{
    setIsOpen(true)
  }
  return (
    <div className="footer-container-outer">
      <div className="footer-text-container">
        <h1>Join the Movement</h1>
        <h2>
          Do you belive in community? Join our mailing list to receive exclusive
          updates, engage with upcoming campaigns, and be among the first to
          beta test Village's mobile app!
        </h2>
      </div>
      <div className="footer-signup-container">
        <Signup buttonColour="light"></Signup>
      </div>
      <div className="footer-section-2">
        <img src={footerLogo} onClick={()=>{animateScroll.scrollToTop()}}></img>
        <div className="footer-links">
          <Link to="your-community" smooth offset={-450}>
            <button>Features</button>
          </Link>
          <Link to="team" smooth offset={-450}>
            <button>Team</button>
          </Link>
          <Link to="faq" smooth offset={-450}>
            <button>FAQ</button>
          </Link>
          <Link>
            <button onClick={handleOpen}>Contact</button>
          </Link>
          {isOpen&&
            <Modal
                  show={isOpen}
                  onHide={handleClose}
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  className="bootstrap-modal"
            >
              <div className="contact-container">
                <h1>
                  Contact us
                </h1>
                <h2>
                  <a href="mailto:info@thevillageapp.co">info@thevillageapp.co</a>
                </h2>
              </div>
            </Modal>
        }
        </div>
        <div className="footer-socials">
              <a href="https://www.fb.com/thevillageapp.co"><FontAwesomeIcon icon={faFacebookF}/></a>
              <a href="https://www.Instagram.com/thevillageapp.co"><FontAwesomeIcon icon={faInstagram}/></a>
              <a href="https://www.Twitter.com/thevillageappco"><FontAwesomeIcon icon={faTwitter}/></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
