import React from 'react'
import Card from 'react-bootstrap/Card';
function FullStackDev() {
  return <>
   <Card style={{ width: '20rem', textAlign:"center" }}>
      <Card.Img variant="top" src="https://www.freecodecamp.org/news/content/images/2022/01/ferenc-almasi-L8KQIPCODV8-unsplash.jpg"/>
      <Card.Body>
        <Card.Title>Full Stack Development</Card.Title>
        <Card.Text>
        Explore thousands of high-quality full stack ideas on Guvi.
        </Card.Text>
      </Card.Body>
    </Card>
    <br/>
    <div>
      <b>What is Full Stack Development</b>
      <p>Full stack development is the process of developing both the frontend and backend of applications. Any application has a frontend (user-facing) component and a backend (database and logic) component. The frontend contains the user interface and code related to user interactions with the application.</p>
    </div>
  </>
}

export default FullStackDev
