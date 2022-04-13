import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

function Contact() {

    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

        const submit = () => {
        if (name && contact && message) {
            const serviceId = 'service_id';
            const templateId = 'template_m710o9g';
            const userId = 'user_id';
            const templateParams = {
                name,
                contact,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setContact('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
        }


  return (
	<Container id="contact" className="pt-5">
    <Row>
      <Col>
				<h1 className="display-5 fw-bold text-center">Contact Us</h1>
      </Col>
    </Row>
		<Row>
			<Col md>
				<p>Questions or Comments? Reach out to us for a free quote today by calling or filling out our contact form.</p>		
        <i className="bi bi-telephone-fill"></i><span> (402) 613-1097</span><br />
        <i className="bi bi-envelope-fill"></i><span> curtiswiley402@gmail.com</span>
			</Col>
			<Col md>
      <div className = "card">
        <div className = "card-body">
      <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContactInfo">
        <Form.Label>Contact Information</Form.Label>
        <Form.Control type="text" placeholder="Enter your email or phone." value={contact} onChange={e => setContact(e.target.value)}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formText">
        <Form.Label>Reason for contacting us.</Form.Label>
        <Form.Control type="textarea" placeholder="Questions, comments, or a free quote, let us know!" value={message} onChange={e => setMessage(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={submit}>
        Submit
      </Button>
      </Form>
      <span className={emailSent ? 'visible' : 'invisible'}>Thank you for your message, we will be in touch in no time!</span>
      </div>
      </div>

			</Col>
		</Row>
	</Container>
  );
}

export default Contact;

