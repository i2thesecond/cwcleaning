import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function FormContact(){
  return (
<Form>
  <Form.Group className="mb-3" controlId="formName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter your email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formPhone">
    <Form.Label>Phone</Form.Label>
    <Form.Control type="phone" placeholder="Enter your phone" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formText">
    <Form.Label>Reason for contacting us.</Form.Label>
    <Form.Control type="text" placeholder="Questions, comments, or a free quote, let us know!" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  );
}

export default FormContact;