import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPinMapFill, BsFillTelephoneOutboundFill, BsEnvelopeOpenFill, BsWordpress } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { MdOutlinePageview } from "react-icons/md";
import { BsFillChatSquareTextFill } from 'react-icons/bs'; 
import './style/footer/footer.css';

export default function footer() {
  return (

    <div className="footer-div">
              <Container>
                <Row>
                  <Col>
                    <Row>
                      <h5 id="h5-foot">Linkovi</h5>
                        <Col>
                          <h6>Glavni linkovi</h6>
                          <h6> <a href="https://nikolaknezevic120.github.io/nikola-react-app/#/index" id='links'><MdOutlinePageview /> Početna stranica</a></h6>
                          <h6> <a href="https://nikolaknezevic120.github.io/nikola-react-app/#/about" id='links'><MdOutlinePageview /> O meni</a></h6>
                        </Col>
                        <Col>
                          <h6>Linkovi na projekte</h6>
                          <h6> <a href="https://nikolaknezevic120.github.io/nikola-react-app/#/login" id='links'><FaReact /> 
                            Follow the card</a>
                          </h6>
                          <h6> <a href="https://nikolaknezevic120.github.io/nikola-react-app/#/infinite_slider" id='links'><TbBrandJavascript />
                            Infinite slider</a>
                          </h6>
                          <h6> <a href="https://nikolaknezevic120.github.io/nikola-react-app/#/word-press" id='links'><BsWordpress /> 
                            WordPress</a>
                          </h6>
                        </Col>
                    </Row>
                  </Col>
                
                  <Col>
                    <h5 id="h5-foot">Adresa</h5>
                    <p><BsPinMapFill /> Ulica Roberta Frangeša Mihanovića 69, <br />
                        23000, Zadar</p>
                  </Col>

                  <Col>
                    <h5 id="h5-foot">Kontakt</h5>
                      <p><BsFillChatSquareTextFill /><a href='https://nikolaknezevic120.github.io/nikola-react-app/#/download-and-contact'> Pošaljite email odmah.</a></p>
                      <p><BsFillTelephoneOutboundFill /> Mob: <a href="tel:+385958409108"> 095 840 91 08 </a></p>
                      <p><BsEnvelopeOpenFill /> Mail: <a href="mailto:nikola120k@gmail.com"> nikola120k@gmail.com </a></p>
                  </Col>
                
                </Row>

                <Row>
                  <div className="footer-bottom">
                    <h6>Aplikaciju izradio Nikola Knežević</h6>
                  </div>
                </Row>
              </Container>
            </div>
  )
}
