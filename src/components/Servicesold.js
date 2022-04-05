import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Services() {
  return (
	<Container className="pt-5">
		<Row>
			<Col>
				<h1 class="display-5 fw-bold">Our Services</h1>
				<p>At C.W. Clean & Go, we offer the following services:</p>
				<ul>
					<li>Carpet & Upholstery Cleaning</li>
					<li>Hard Floor Cleaning</li>
					<li>Tile & Grout Cleaning</li>
					<li>Janitorial Services</li>
					<li>for both Commercial and Residential!</li>
				</ul>				
			</Col>
		</Row>
	</Container>
  );
}

export default Services;

