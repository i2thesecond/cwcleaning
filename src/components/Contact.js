import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import emailjs from '@emailjs/browser';


function Contact() {

    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');

    const [validated, setValidated] = useState(false);

    const [quoteConfirm, setQuoteConfirm] = useState(false);
    const handleCloseQuoteConfirm = () => setQuoteConfirm(false);

        const submit = (e) => {
        e.preventDefault();
        if (name.length === 0){
          setValidated(true);
        }
        if (contact.length === 0){
          setValidated(true);
        }
        if (message.length === 0){
          setValidated(true);
        }
        if (name && contact && message) {
            const serviceId = 'service_516e7og';
            const templateId = 'template_m710o9g';
            const publicKey = 'jwz8OWzeKwH5X3Jo5';
            const templateParams = {
                name,
                contact,
                message
            };
            emailjs.send(serviceId, templateId, templateParams, publicKey)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setContact('');
            setMessage('');
            setValidated(false);
            setQuoteConfirm(true);
        } 
        }


  return (

	<Container id="contact" className="pt-5">

      <Modal
        show={quoteConfirm}
        onHide={handleCloseQuoteConfirm}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Message Recieved!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
			<h4>Thank you! We will get back to you soon!</h4>
        </Modal.Body>
        <Modal.Footer>
   	       <Button variant="secondary" onClick={handleCloseQuoteConfirm}>
   	         Close
   	       </Button>

        </Modal.Footer>
      </Modal>

    <div className = "card bg-info text-white container-services-shadow">
      <div className='card-body'>
    <Row>
      <Col>
				<h1 className="display-5 fw-bold text-center">Contact Us</h1>
				<h4>Questions or Comments? Reach out to us for a free quote today by calling or filling out our contact form.</h4>		
      </Col>
    </Row>
		<Row>
			<Col md className='mt-4'>
        <i className="bi bi-telephone-fill"></i> <a className="link-body-style text-white" href="tel:402-613-4097"><span>402-613-4097</span></a><br />
        <i className="bi bi-envelope-fill"></i> <a className="link-body-style text-white" href="mailto: support@cwcleanngo.com"><span>support@cwcleanngo.com</span></a><br />
        <i className="bi bi-geo-alt"></i><span className='contact-style'>Lincoln, NE</span>
			</Col>
			<Col md>
      <div className = "card bg-info">
        <div className = "card-body">
      <Form className='text-white' noValidate validated={validated} onSubmit={submit}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control required type="text" placeholder="Enter your name" value={name} onChange={e => setName(e.target.value)} />
			    <div className="invalid-feedback">
 				     Please provide your name.
			    </div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContactInfo">
        <Form.Label>Contact Information</Form.Label>
        <Form.Control required type="text" placeholder="Enter your email or phone." value={contact} onChange={e => setContact(e.target.value)}  />
			    <div className="invalid-feedback">
 				     Please provide your contact information.
			    </div>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formText">
        <Form.Label>Reason for contacting us.</Form.Label>
        <Form.Control required type="textarea" placeholder="Questions, comments, or a free quote, let us know!" value={message} onChange={e => setMessage(e.target.value)} />
			    <div className="invalid-feedback">
 				     Please provide a message for us.
			    </div>
      </Form.Group>

      <Button variant="primary" type="submit" onClick={submit}>
        Submit
      </Button>
      </Form>
      </div>
      </div>

			</Col>
		</Row>
    </div>
    </div>
	</Container>
  );
}

export default Contact;

