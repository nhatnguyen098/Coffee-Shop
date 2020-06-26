import React from "react";
import { Table, Row, Col, Image } from "react-bootstrap";
import "./style.scss";
import { useSelector } from "react-redux";
import Button from "../../atoms/buttons";
const Index = () => {
  const owlClass = "m-cartTable";
  const { data } = useSelector((state: any) => state.carts);
  return (
    <Row className={owlClass}>
      <Col md={8} className={`${owlClass}-col`}>
        <Table
          borderless
          responsive="md"
          className={`${owlClass}-col-table`}
          striped
        >
          <thead className={`${owlClass}-col-table-title`}>
            <tr>
              <th>#</th>
              <th></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody className={`${owlClass}-col-table-body`}>
            {data &&
              data.map((item: any, i: number) => {
                return (
                  <tr key={i} className={`${owlClass}-col-table-body-tr`}>
                    <td>
                      <Button
                        className="m-1"
                        hover={true}
                        background="unset"
                        color="white"
                        onClick={() => console.log("test")}
                      >
                        x
                      </Button>
                    </td>
                    <td>
                      <Image
                        style={{ width: "70px", height: "70px" }}
                        src={item.urlImage}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <input
                        className="text-center text-secondary"
                        style={{
                          backgroundColor: "unset",
                          outline: "unset",
                          border: "1px solid gray",
                          width: "100%",
                        }}
                        min={1}
                        max={99}
                        type="number"
                        defaultValue={item.quantity}
                      />
                    </td>
                    <td>${item.price * item.quantity}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Col>
      <Col md={{ span: 3, offset: 1 }} className={`${owlClass}-col`}>
        123
      </Col>
    </Row>
  );
};

export default Index;
