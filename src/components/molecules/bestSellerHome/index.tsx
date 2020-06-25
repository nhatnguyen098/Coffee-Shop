import React from "react";
import { Row, Col } from "react-bootstrap";
import CardProduct from "../cardProduct";
import "./style.scss";
const Index = ({ proData }: any) => {
  const owlClass = "m-bestSeller";
  return (
    <Row className={owlClass}>
      <h3 className="d-block w-100 text-center">Discover</h3>
      <h2 className="d-block w-100 text-center mb-5">Best Seller Coffee</h2>
      {proData && proData.map((item: any, i: number) => {
        return (
          <Col md = {3} key={i} style = {{marginBottom: '15px'}}>
            <CardProduct
              data={item}
              getIdToDetail={(val) => console.log(val)}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default Index;
