import React from "react";
import { Row, Col } from "react-bootstrap";
import CardProduct from "../cardProduct";
import "./style.scss";
const Index = ({ proData, getIdToDetail }: any) => {
  const owlClass = "m-bestSeller";
  return (
    <Row className={owlClass}>
      <h3 className="d-block w-100 text-center">Discover</h3>
      <h2 className="d-block w-100 text-center mb-5">Best Seller Coffee</h2>
      {proData && proData.map((item: any, i: number) => {
        return (
          <Col xs={12} sm={12} md = {12} lg={3} key={i} style = {{marginBottom: '15px'}}>
            <CardProduct
              data={item}
              getIdToDetail={(val) => getIdToDetail(val)}
            />
          </Col>
        );
      })}
    </Row>
  );
};

export default Index;
