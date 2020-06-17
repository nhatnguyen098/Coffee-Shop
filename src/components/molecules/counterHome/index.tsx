import React from "react";
import { Row, Col } from "react-bootstrap";
import { GiCoffeeCup } from "react-icons/gi";
import { AiOutlineCustomerService } from "react-icons/ai";
import { FiAward } from "react-icons/fi";
import bg_2 from "../../../assets/images/bg_2.jpg";
import "./style.scss";
const Index = () => {
  const owlClass = "m-counter";
  return (
    <Row className={owlClass} style={{ backgroundImage: `url(${bg_2})` }}>
      <Col className={`${owlClass}-col`}>
        <div className={`${owlClass}-col-icons`}>
          <span className={`${owlClass}-col-icons-span`}></span>
          <GiCoffeeCup size="3em" color="#c49b63" />
        </div>
        <p className={`${owlClass}-col-count`}>100</p>
        <p className={`${owlClass}-col-text`}>Coffee Branches</p>
      </Col>
      <Col className={`${owlClass}-col`}>
        <div className={`${owlClass}-col-icons`}>
          <GiCoffeeCup size="3em" color="#c49b63" />
        </div>
        <p className={`${owlClass}-col-count`}>100</p>
        <p className={`${owlClass}-col-text`}>Coffee Branches</p>
      </Col>
      <Col className={`${owlClass}-col`}>
        <div className={`${owlClass}-col-icons`}>
          <AiOutlineCustomerService size="3em" color="#c49b63" />
        </div>
        <p className={`${owlClass}-col-count`}>10,567</p>
        <p className={`${owlClass}-col-text`}>Happy Customer</p>
      </Col>
      <Col className={`${owlClass}-col`}>
        <div className={`${owlClass}-col-icons`}>
          <FiAward size="3em" color="#c49b63" />
        </div>
        <p className={`${owlClass}-col-count`}>100</p>
        <p className={`${owlClass}-col-text`}>Coffee Branches</p>
      </Col>
    </Row>
  );
};

export default Index;
