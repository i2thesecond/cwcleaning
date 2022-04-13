import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';


function NavigationBar() {
  return (
	<Navbar expand="sm">
	  <Container>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav" className="justify-content-md-center">
		  <Nav>
			<Nav.Link href="#Services">Services</Nav.Link>
			<Nav.Link href="#Examples">Examples</Nav.Link>
			<Nav.Link href="#About">About</Nav.Link>
			<Nav.Link href="#About">Contact</Nav.Link>
		  </Nav>
		</Navbar.Collapse>
	  </Container>
	</Navbar>
  );
}

export default NavigationBar;
