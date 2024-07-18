import React from 'react'
import Card from 'react-bootstrap/Card';
function DataScience() {
  return <>
     <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://www.naukri.com/campus/career-guidance/wp-content/uploads/2023/11/what-is-data-science.jpg"/>
      <Card.Body>
        <Card.Title>Data Science</Card.Title>
        <Card.Text>
        The study of data to extract meaningful insights for business on Guvi.
        </Card.Text>
      </Card.Body>
    </Card>
    <br/>
    <div>
      <b>What is Data Science?</b>
      <p>Data science is an interdisciplinary field focused on extracting knowledge from typically large data sets and applying the knowledge and insights from that data to solve problems in a wide range of application domains.</p>
    </div>
  </>
}

export default DataScience
