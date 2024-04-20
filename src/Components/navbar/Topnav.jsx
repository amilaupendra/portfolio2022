import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "./topnav.css";


export default function Topnav() {
  return (
    <Navbar expand="md" className="bg-body-tertiary navigation">
      <Container fluid>
        <Navbar.Brand  href="#home" style={{color:'white'}}>Amila Upendra</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#works">Works</Nav.Link>
            <Nav.Link href="#contactus">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
