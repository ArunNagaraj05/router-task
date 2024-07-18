import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'

function NavBar() {
  return <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrHvU9flTnoO3cQUjbd56jnNrJCnuhPtL-UCc5IQ&usqp=CAE&s" alt='guvi'/>GUVI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav variant="underline" defaultActiveKey="/home">
          <Nav.Item>
          <Link to ='/all' className="nav-link">ALL</Link>
          </Nav.Item>
          <Nav.Item>
          <Link to ='/full-stack-dev' className="nav-link">FULL STACK DEVELOPMENT</Link>
          </Nav.Item>
          <Nav.Item>
          <Link to ='/data-science' className="nav-link">DATA SCIENCE</Link>
          </Nav.Item>
          <Nav.Item>
          <Link to ='/cyber-sec' className="nav-link">CYBER SECURITY</Link>
          </Nav.Item>
          <Nav.Item>
          <Link to ='/career' className="nav-link">CAREER</Link>
          </Nav.Item>
          </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default NavBar
