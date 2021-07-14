import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import aboutImg from "../../../assets/images/about.jpg";
import "./style.scss";
const Index = () => {
  const owlClass = "m-aboutInfo";
  return (
    <Row className={owlClass}>
      <Col className={`${owlClass}-col_left`}>
        <Image className={`${owlClass}-col_left-img`} src={aboutImg}/>
      </Col>
      <Col className={`${owlClass}-col_right`}>
        <h2 className={`${owlClass}-col_right-h2`}>Discover</h2>
        <h1 className={`${owlClass}-col_right-h1`}>OUR STORY</h1>
        <p className={`${owlClass}-col_right-p`}>
          On her way she met a copy. The copy warned the Little Blind Text, that
          where it came from it would have been rewritten a thousand times and
          everything that was left from its origin would be the word "and" and
          the Little Blind Text should turn around and return to its own, safe
          country. But nothing the copy said could convince her and so it didn’t
          take long until a few insidious Copy Writers ambushed her, made her
          drunk with Longe and Parole and dragged her into their agency, where
          they abused her for their.
        </p>
      </Col>
    </Row>
  );
};

export default Index;
