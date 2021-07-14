import React from "react";
import { Row, Col } from "react-bootstrap";
import { TiDocumentText } from "react-icons/ti";
import { GrDeliver } from "react-icons/gr";
import { GiCoffeeBeans } from "react-icons/gi";
import "./style.scss";
const Index = () => {
  const owlClass = "m-serviceInfo";
  return (
    <Row className={owlClass}>
      <Col xs={12} sm={12} md={12} lg={4} className={`${owlClass}-col text-center`}>
        <TiDocumentText
          size="7em"
          style={{
            border: "1px solid gray",
            padding: "20px",
            marginBottom: "40px",
          }}
        />

        <p style={{ marginBottom: "20px" }}>EASY TO ORDER</p>
        <p style={{ lineHeight: "2" }}>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic.
        </p>
      </Col>
      <Col xs={12} sm={12} md={12} lg={4} className={`${owlClass}-col text-center`}>
        <GrDeliver
          size="7em"
          style={{
            border: "1px solid gray",
            padding: "20px",
            marginBottom: "40px",
          }}
        />

        <p style={{ marginBottom: "20px" }}>EASY TO ORDER</p>
        <p style={{ lineHeight: "2" }}>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic.
        </p>
      </Col>
      <Col xs={12} sm={12} md={12} lg={4} className={`${owlClass}-col text-center`}>
        <GiCoffeeBeans
          size="7em"
          style={{
            border: "1px solid gray",
            padding: "20px",
            marginBottom: "40px",
          }}
        />

        <p style={{ marginBottom: "20px" }}>EASY TO ORDER</p>
        <p style={{ lineHeight: "2" }}>
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic.
        </p>
      </Col>
    </Row>
  );
};

export default Index;
