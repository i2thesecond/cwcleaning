import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FormContact } from './FormContact';

function Contact() {
  return (
	<Container className="pt-5">
		<Row>
			<Col>
				<h1 class="display-5 fw-bold">Contact Us</h1>
				<p>Questions or Comments? Reach out to us for a quote today by calling or filling out our contact form.</p>		
				<FormContact />
			</Col>
		</Row>
	</Container>
  );
}

export default Contact;

