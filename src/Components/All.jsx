import React from 'react'
import FullStackDev from './FullStackDev'
import DataScience from './DataScience'
import CyberSec from './CyberSec'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function All() {
  return <>
  <Row className="mb-3">
   <Col> <FullStackDev/></Col>
   <Col><DataScience/> </Col> 
   <Col><CyberSec/> </Col>
  </Row>
  </>
}

export default All
