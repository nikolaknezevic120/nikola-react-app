import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../style/contact-and-download/body/body.css';
import Downolad from './Downolad.js';
import Contact from './Contact-form.js';

export default function ContAndDown() {
  return (
    <Container fluid>
      <div className='contact-download-body'>
        <h3>Preuzmite infinite slider kod za pregled, <br />
        pregledajte kod cijele aplikacije <br /> ili mi pošaljite email</h3>
        <Row>
          <Col lg={6} sm={12}>
            <Downolad />
          </Col>
          
          <Col lg={6} sm={12}>
            <Contact />
          </Col>
        </Row>
      </div>
    </Container>
  )
}
