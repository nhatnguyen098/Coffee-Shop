import React from "react";
import CardProduct from "../../molecules/cardProduct";
import { Row, Col } from "react-bootstrap";
import "./style.scss";
import ButtonGroup from "../../molecules/buttonGroup";
const productPage = () => {
  const owlClass = "o-productList";
  return (
    <section className={owlClass} style={{ margin: "unset" }}>
      <div className={`${owlClass}-btnGroup`}>
        <ButtonGroup />
      </div>

      <Row style={{ marginTop: "100px" }}>
        <Col>
          <CardProduct />
        </Col>
        <Col>
          <CardProduct />
        </Col>
        <Col>
          <CardProduct />
        </Col>
        <Col>
          <CardProduct />
        </Col>
      </Row>
    </section>
  );
};

export default productPage;
