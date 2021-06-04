import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Button,
  Form,
} from "react-bootstrap";
import image from "./images/4-cropped.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { animateScroll, Events, Link } from 'react-scroll'


const Navigation = (props) => {
  return (
    <div className="navbar-container">
      <Navbar expand="lg" bg="light" fixed="top">
        <Navbar.Brand onClick={()=>{animateScroll.scrollToTop()}}>
          <img src={image} width={200}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link onClick={()=>{animateScroll.scrollToTop()}}><FontAwesomeIcon icon={faHome} size={"2x"}/></Nav.Link>
            <Nav.Link><Link href="#your-community" to="your-community" smooth>Your Community</Link></Nav.Link>
            <Nav.Link><Link href="#your-people" to="your-people" smooth>Your People</Link></Nav.Link>
            <Nav.Link><Link href="#no-trolls" to="no-trolls" smooth>No Trolls</Link></Nav.Link>
            <Nav.Link><Link href="#our-story" to="our-story" smooth>Our Story</Link></Nav.Link>
            <Nav.Link><Link href="the-app" to="the-app" smooth>The App</Link></Nav.Link>
            <Nav.Link><Link href="try-it" to="try-it" smooth>Try It!</Link></Nav.Link>
            <div className="icons">
              <Nav.Link><FontAwesomeIcon icon={faFacebookF}/></Nav.Link>
              <Nav.Link><FontAwesomeIcon icon={faInstagram}/></Nav.Link>
              <Nav.Link><FontAwesomeIcon icon={faTwitter}/></Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
