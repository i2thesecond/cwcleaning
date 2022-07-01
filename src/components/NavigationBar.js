import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";


function NavigationBar() {
  return (
	<Navbar expand="sm" className='navbar-light bg-light'>
	  <Container>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav" className="justify-content-md-center">
		  <Nav>
		  	<Link to="services" activeClass="active" className="nav-link nav-hover" spy={true} smooth={true} offset={0} duration={100}>Services</Link>
		  	<Link to="examples" activeClass="active" className="nav-link nav-hover" spy={true} smooth={true} offset={0} duration={100}>Examples</Link>
		  	<Link to="about" activeClass="active" className="nav-link nav-hover" spy={true} smooth={true} offset={0} duration={100}>About</Link>
		  	<Link to="contact" activeClass="active" className="nav-link nav-hover" spy={true} smooth={true} offset={0} duration={100}>Contact</Link>
		  </Nav>
		</Navbar.Collapse>
	  </Container>
	</Navbar>
  );
}

export default NavigationBar;
