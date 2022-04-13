import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";


function NavigationBar() {
  return (
	<Navbar expand="sm">
	  <Container>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav" className="justify-content-md-center">
		  <Nav>
			<Nav.Link><Link activeClass="active" to="services" spy={true} smooth={true} duration={100}>Services</Link></Nav.Link>
			<Nav.Link><Link activeClass="active" to="examples" spy={true} smooth={true} duration={100}>Examples</Link></Nav.Link>
			<Nav.Link><Link activeClass="active" to="about" spy={true} smooth={true} duration={100}>About</Link></Nav.Link>
			<Nav.Link><Link activeClass="active" to="contact" spy={true} smooth={true} duration={100}>Contact</Link></Nav.Link>
		  </Nav>
		</Navbar.Collapse>
	  </Container>
	</Navbar>
  );
}

export default NavigationBar;
