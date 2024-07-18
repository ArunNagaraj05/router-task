import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
function Career() {
  return <>
  <h2>Want to start learing with GUVI!...</h2>
  <h4>Fill the details provided below.</h4>
  <br/>
   <Form>
      <Row className="mb-3">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter First name"
          />
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Last name"
          />
          <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              aria-describedby="inputGroupPrepend"
              required
            />
      </Row>
      <Row className="mb-3">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="Enter City" required />
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="Enter State" required />
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Enter Zip" required />
      </Row>
      <Button type="submit">Submit</Button>
    </Form>
  </>
}

export default Career
