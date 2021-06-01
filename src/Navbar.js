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

const Navigation = (props) => {
  return (
    <div className="navbar-container">
      <Navbar expand="lg" bg="light">
        <Navbar.Brand href="/">
          <img src={image} width={200}></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Features</Nav.Link>
            <Nav.Link href="#home">Team</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            <Nav.Link>facebook</Nav.Link>
            <Nav.Link>instagram</Nav.Link>
            <Nav.Link>twitter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
