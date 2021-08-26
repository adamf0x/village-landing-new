import React, { useState } from "react";
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
  function clickHandler(e, href) {
    const hrefValue = href;
    const offsetTop = document.querySelector(hrefValue)?.offsetTop - 150;
    e.target.classList.add("active");
    window.scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }
  

  return (
    <div className="navbar-container">
      <Navbar expand="lg" bg="light" fixed="top">
        <Navbar.Brand className="invisible"></Navbar.Brand>
        <Navbar.Brand onClick={()=>{animateScroll.scrollToTop()}}>
          <img src={image} width={200}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            { !window.location.href.includes('events')?
            <>
            <Nav.Link onClick={()=>{animateScroll.scrollToTop()}}><FontAwesomeIcon icon={faHome} size={"2x"}/></Nav.Link>
            <Nav.Link><Link href="#our-story" to="our-story" offset={-300} smooth>Our Story</Link></Nav.Link>
            <Nav.Link><Link href="the-app" to="the-app" offset={-400} smooth>The App</Link></Nav.Link>
            <Nav.Link href="/events">Curb It!</Nav.Link>
            <Nav.Link ><Link onClick={(e)=>{props.openDownloadModal();}} href="try-it" to="try-it" offset={-500} smooth>Try It!</Link></Nav.Link>
            </>:
             <>
             <Nav.Link  href="/" onClick={()=>{animateScroll.scrollToTop()}}><FontAwesomeIcon icon={faHome} size={"2x"}/></Nav.Link>
             <Nav.Link href="/#our-story">Our Story</Nav.Link>
             <Nav.Link href="/#the-app">The App</Nav.Link>
             <Nav.Link onClick={()=>{animateScroll.scrollToTop()}}>Curb It!</Nav.Link>
             <Nav.Link onClick={(e)=>{props.openDownloadModal();}}>Try It!</Nav.Link>
             </>
            }
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
