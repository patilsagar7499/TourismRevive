import React from "react";
import "./newsletter.css";

import { Col, Container, Row } from "reactstrap";
import maleTourist from "../assets/images/male-tourist.png";

const NewsLetter = () => {
  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe to get useful traveling information.</h2>
              <div className="newsletter__input">
                <input type="email" placeholder="Enter yout email" />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
                sint cillum sint consectetur cupidatat.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
