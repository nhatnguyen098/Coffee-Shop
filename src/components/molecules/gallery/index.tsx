import React from "react";
import "./style.scss";
import gallery_1 from "../../../assets/images/gallery-1.jpg";
import gallery_2 from "../../../assets/images/gallery-2.jpg";
import gallery_3 from "../../../assets/images/gallery-3.jpg";
import gallery_4 from "../../../assets/images/gallery-4.jpg";
import { Row, Col, Image } from "react-bootstrap";
const Index = () => {
  const owlClass = "m-gallery";
  return (
    <Row className={owlClass}>
      <Col xs={12} sm={12} md={12} lg={3} className={`${owlClass}-col`}>
        <Image className={`${owlClass}-col-img`} src={gallery_1} />
      </Col>
      <Col xs={12} sm={12} md={12} lg={3} className={`${owlClass}-col`}>
        <Image className={`${owlClass}-col-img`} src={gallery_2} />
      </Col>
      <Col xs={12} sm={12} md={12} lg={3} className={`${owlClass}-col`}>
        <Image className={`${owlClass}-col-img`} src={gallery_3} />
      </Col>
      <Col xs={12} sm={12} md={12} lg={3} className={`${owlClass}-col`}>
        <Image className={`${owlClass}-col-img`} src={gallery_4} />
      </Col>
    </Row>
  );
};

export default Index;
