import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./topnav.css";

export default function Topnav() {
  return (
    <div className="headerdiv">
      <Navbar fixed="top"  bg="dark" variant="dark">
        <Container >
          <Navbar.Brand  href="#home"> Amila Upendra</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to={"/"}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/about"}>About</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/experience"}>Experience</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to={"/works"}>Works</Link>
            </Nav.Link>
          </Nav>
          </Container>

      </Navbar>
      
    </div>
  );
}
