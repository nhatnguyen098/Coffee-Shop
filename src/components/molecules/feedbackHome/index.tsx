import React from "react";
import "./style.scss";
import bg from "../../../assets/images/bg_1.jpg";
import { Row, Col } from "react-bootstrap";
const Index = () => {
  const owlClass = "m-feedback";
  return (
    <Row className={owlClass} style={{ backgroundImage: `url(${bg})` }}>
      <Col xs={12} className = 'text-center' style = {{paddingTop:'100px'}} md={12}>
        <h4>Testimony</h4>
        <h3> CUSTOMERS SAYS</h3>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </Col>
      <Col xs={12} className={`${owlClass}-col`} md={12}>
        <Row className={`${owlClass}-col-wrapper`}>
          <Col className={`${owlClass}-col-wrapper-cmt`}>
            <p>
              “Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a
              small.”
            </p>
            <p>Louise Kelly</p>
            <span>Illustrator Designer</span>
          </Col>
          <Col className={`${owlClass}-col-wrapper-cmt`}>
            <p>
              “Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name of Lorem Ipsum decided to leave for
              the far World of Grammar.”
            </p>
            <p>Louise Kelly</p>
            <span>Illustrator Designer</span>
          </Col>
          <Col className={`${owlClass}-col-wrapper-cmt`}>
            <p>
              “Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic life One day however a small
              line of blind text by the name. ”
            </p>
            <p>Louise Kelly</p>
            <span>Illustrator Designer</span>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Index;
