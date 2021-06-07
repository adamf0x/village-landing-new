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
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Brand onClick={()=>{animateScroll.scrollToTop()}}>
          <img src={image} width={200}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link onClick={()=>{animateScroll.scrollToTop()}}><FontAwesomeIcon icon={faHome} size={"2x"}/></Nav.Link>
            <Nav.Link><Link href="#your-community" to="your-community" offset={-300} smooth>Your Community</Link></Nav.Link>
            <Nav.Link><Link href="#your-people" to="your-people" offset={-500} smooth>Your People</Link></Nav.Link>
            <Nav.Link><Link href="#no-trolls" to="no-trolls" offset={-300} smooth>No Trolls</Link></Nav.Link>
            <Nav.Link><Link href="#our-story" to="our-story" offset={-300} smooth>Our Story</Link></Nav.Link>
            <Nav.Link><Link href="the-app" to="the-app" offset={-400} smooth>The App</Link></Nav.Link>
            <Nav.Link><Link href="try-it" to="try-it" offset={-500} smooth>Try It!</Link></Nav.Link>
            <div className="icons">
              <Nav.Link href="https://www.fb.com/thevillageapp.co"><FontAwesomeIcon icon={faFacebookF}/></Nav.Link>
              <Nav.Link href="https://www.Instagram.com/thevillageapp.co"><FontAwesomeIcon icon={faInstagram}/></Nav.Link>
              <Nav.Link href="https://www.Twitter.com/thevillageappco"><FontAwesomeIcon icon={faTwitter}/></Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
