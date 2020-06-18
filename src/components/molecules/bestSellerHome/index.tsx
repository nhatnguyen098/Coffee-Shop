import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "../cardProduct";
import "./style.scss";
const Index = () => {
  const owlClass = "m-bestSeller";
  return (
    <Row className={owlClass}>
      <h3 className = "d-block w-100 text-center">Discover</h3>
      <h2 className = "d-block w-100 text-center mb-5">Best Seller Coffee</h2>
      <Col>
        <Card />
      </Col>
      <Col>
        <Card />
      </Col>
      <Col>
        <Card />
      </Col>
      <Col>
        <Card />
      </Col>
    </Row>
  );
};

export default Index;
