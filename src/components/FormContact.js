import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function FormContact(){
  return (
      <Form>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContactInfo">
        <Form.Label>Contact Information</Form.Label>
        <Form.Control type="text" placeholder="Enter your email or phone." />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formText">
        <Form.Label>Reason for contacting us.</Form.Label>
        <Form.Control type="textarea" placeholder="Questions, comments, or a free quote, let us know!" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Form>
  );
}

export default FormContact;