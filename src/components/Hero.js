import React, { useState } from 'react';
import Image from 'react-bootstrap/Image'
import companyLogo from '../img/logo.png';
import {Row, Col, Modal, Button, Form} from 'react-bootstrap';
import { Check, ChevronContract } from 'react-bootstrap-icons';
import emailjs from '@emailjs/browser';

function Hero() {


    const [quoteConfirm, setQuoteConfirm] = useState(false);
    const handleCloseQuoteConfirm = () => setQuoteConfirm(false);

    const [quoteForm, setQuoteForm] = useState(false);
    const handleCloseQuoteForm = () => setQuoteForm(false);

	const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');

	const [validated, setValidated] = useState(false);

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
			setValidated(false)
			setQuoteForm(false);
            setQuoteConfirm(true);
        } 
    }

  return (

	<section>
      <Modal
        show={quoteForm}
        onHide={handleCloseQuoteForm}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Ask for a Free Quote!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Thank you for contacting us.</h4>
			<p>Please leave your details below. Feel free to ask about any of our many cleaning services and we will quickly contact you with a free quote!</p>
			<Form noValidate validated={validated} onSubmit={submit}>
			<Form.Group className="mb-3 mt-3" >
				<Form.Label>Name</Form.Label>
				<Form.Control required  type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Enter your name." />
			    <div className="invalid-feedback">
 				     Please provide your name.
			    </div>
			</Form.Group>
			<Form.Group className="mb-3" >
				<Form.Label>Contact Info</Form.Label>
				<Form.Control required type="text" value={contact} onChange={e => setContact(e.target.value)} placeholder="How may we contact you?" />
			    <div className="invalid-feedback">
 				     Please provide your contact information.
			    </div>
			</Form.Group>
			<Form.Group className="mb-3" >
				<Form.Label>Additional Comments</Form.Label>
				<Form.Control required type="text" value={message} onChange={e => setMessage(e.target.value)} placeholder="Anything you'd like us to know?"/>
			    <div className="invalid-feedback">
 				     Please provide a message for us.
			    </div>
			</Form.Group>
			</Form>
        </Modal.Body>

        <Modal.Footer>
   	       <Button variant="secondary" onClick={handleCloseQuoteForm}>
   	         Close
   	       </Button>
			<Button variant="primary" type="submit" onClick={submit}>
				Submit
			</Button>
        </Modal.Footer>
      </Modal>
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
	  


	<div className="bg-hero border-bottom">
	<div className="pt-5 text-center">
		<h1 className="text-white display-5 fw-bold">C. W. Clean N Go</h1>
			<div className="col-lg-6 mx-auto">
				<p className="text-white lead mb-0">Floor & Tile Company</p>
				<p className="text-white lead mb-0">Lincoln NE, Omaha NE & surrounding areas</p>
				<p className="text-white lead mb-0">(402) 613-4097</p>
				<button type="button" class="btn btn-outline mt-3 mb-2" onClick={() => setQuoteForm(true)} >Get A Free Quote!</button>
			</div>
	</div>
	<div className="d-flex justify-content-center">
		<Image className="hero-image-negative-margin pt-2" fluid="true"  src={companyLogo} />
	</div>
	</div>
	</section>
  );
}

export default Hero;



