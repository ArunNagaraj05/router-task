import React from 'react'
import Card from 'react-bootstrap/Card';

function CyberSec() {
  return <>
     <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://www.kaspersky.co.in/content/en-in/images/repository/isc/2017-images/What-is-Cyber-Security.jpg"/>
      <Card.Body>
        <Card.Title>Cyber Security</Card.Title>
        <Card.Text>
        Protect computer networks from cyberattacks and unauthorized access...How to protect learn on Guvi.
        </Card.Text>
      </Card.Body>
    </Card>
    <br/>
    <div>
      <b>What is being a cyber security?</b>
      <p>Cybersecurity analysts are often the first line of defense against cybercrime. Cybersecurity analysts protect computer networks from cyberattacks and unauthorized access. They do this by trying to anticipate and defend against cyber threats, and responding to security breaches when they do happen.</p>
    </div>
  </>
  
}

export default CyberSec
