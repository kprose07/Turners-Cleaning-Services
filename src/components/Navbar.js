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
          
            <NavDropdown title="Services" id="basic-nav-dropdown">
            <LinkContainer to="/Services">
              <NavDropdown.Item>Services</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/Equipment">
              <NavDropdown.Item>
                Equipment
              </NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/Location">
              <NavDropdown.Item>Location</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
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