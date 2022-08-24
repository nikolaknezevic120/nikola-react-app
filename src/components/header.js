import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import profileImage from './images/profile-image/profile-image.jpg';
import './style/header/header.css';

export default function header() {
  return (

      <Navbar collapseOnSelect expand="lg" id='header'>
          <Container>

          <Navbar.Brand id='navBar-profile-image'>
                <img src={profileImage} alt=""
                    className="d-inline-block align-top"
                />
          </Navbar.Brand>

              <Navbar.Brand>Portfolio Nikola</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">

                  <Nav className="me-auto">
                      <Nav.Link href="https://nikolaknezevic120.github.io/nikola-react-app/#/index">Početna</Nav.Link>
                      <Nav.Link href="https://nikolaknezevic120.github.io/nikola-react-app/#/about">O meni</Nav.Link>
                      <NavDropdown title="Projekti" id="collasible-nav-dropdown" >
                          <NavDropdown.Item href="https://nikolaknezevic120.github.io/nikola-react-app/#/infinite_slider">Infinite slider</NavDropdown.Item>
                          <NavDropdown.Item href="https://nikolaknezevic120.github.io/nikola-react-app/#/login">Follow the card</NavDropdown.Item>
                          <NavDropdown.Item href="https://nikolaknezevic120.github.io/nikola-react-app/#/word-press">WordPress</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href='https://github.com/nikolaknezevic120?tab=repositories' target="_blank" rel="noopener noreferrer">
                            Ostali radovi</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>

              </Navbar.Collapse>

          </Container>

      </Navbar>

    )

}
