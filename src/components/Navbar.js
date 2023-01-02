//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {LinkContainer} from 'react-router-bootstrap';
import { Outlet, Link } from "react-router-dom";

import '../css/Navbar.css';

function NavBar() {
  return (
    <>
    <Navbar  sticky="top" expand="lg">
      <div className="nav-container">
        <div>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
          <LinkContainer to="/Home">
                <Nav.Link>Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/About">
                <Nav.Link>About</Nav.Link>
            </LinkContainer>
          
            <LinkContainer to="/Services">
              <Nav.Link>Services</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Equipment">
              <Nav.Link>
                Equipment/Credentials
              </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Location">
              <Nav.Link>Location</Nav.Link>
              </LinkContainer>
              <NavDropdown.Divider />
             
            <LinkContainer to="/Gallery">
                <Nav.Link>Gallery</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Contact">
                <Nav.Link>Contact</Nav.Link>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse></div>
      </div>
    </Navbar>
    <Outlet />
    </>
  );
}

export default NavBar;