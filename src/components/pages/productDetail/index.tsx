import React, { useState, useEffect } from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import Button from "../../atoms/buttons";
import "./style.scss";
interface IProDetail {
  data: any;
  onAddToCart: (item: any) => void;
}
const Index: React.FC<IProDetail> = ({ data, onAddToCart }) => {
  const owlClass = "p-productDetail";
  const [productItem, setProductItem] = useState({
    id: null,
    name: '',
    size: "Medium",
    quantity: 1,
    price: 0,
    urlImage: "",
    description: "",
  });
  useEffect(() => {
    data &&
      setProductItem({
        ...productItem,
        id: data.id,
        name:data.name,
        price: data.price,
        urlImage: data.urlImage,
        description: data.description,
      });
  }, [data]);
  return (
    <React.Fragment>
      {data ? (
        <Card className={owlClass} style={{ background: "unset" }}>
          <Row className={`${owlClass}-row`}>
            <Col md={6} className={`${owlClass}-row-col`}>
              <Card.Img
                style={{ width: "540px", height: "540px" }}
                variant="top"
                src={data.urlImage}
              />
            </Col>

            <Col md={6} className={`${owlClass}-row-col`}>
              <Card.Body>
                <Card.Title>
                  <h2>{data.name}</h2>
                </Card.Title>
                <Card.Text style={{ color: "#c49b63" }}>
                  <h3>${data.price}</h3>
                </Card.Text>
                <Card.Text style={{ color: "gray" }}>
                  {data.description}
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth/
                  </p>
                  <p>
                    On her way she met a copy. The copy warned the Little Blind
                    Text, that where it came from it would have been rewritten a
                    thousand times and everything that was left from its origin
                    would be the word "and" and the Little Blind Text should
                    turn around and return to its own, safe country.
                  </p>
                </Card.Text>
                <Form style={{ width: "60%" }}>
                  <Form.Group
                    controlId="exampleForm.ControlSelect1"
                    className="mb-5 mt-5"
                  >
                    <Form.Control
                      as="select"
                      style={{
                        background: "unset",
                        color: "#c49b63",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        boxShadow: "unset",
                      }}
                      defaultValue={productItem.size}
                      onChange={(e: any) =>
                        setProductItem({ ...productItem, size: e.target.value })
                      }
                    >
                      <option value="Medium">Medium</option>
                      <option value="Large">Large</option>
                    </Form.Control>
                  </Form.Group>
                  <Row className="mt-5 mb-5">
                    <Col md={3}>
                      <Button
                        className=""
                        hover={true}
                        background="unset"
                        color="white"
                        width="58px"
                        height="58px"
                        onClick={() =>
                          productItem.quantity > 1 &&
                          setProductItem({
                            ...productItem,
                            quantity: productItem.quantity - 1,
                          })
                        }
                      >
                        <span style={{ fontSize: "20px" }}>-</span>
                      </Button>
                    </Col>
                    <Col
                      md={6}
                      className="d-flex justify-content-center align-items-center"
                      style={{ border: "1px solid #c49b63" }}
                    >
                      {productItem.quantity}
                    </Col>
                    <Col md={3} className="text-right">
                      <Button
                        className=""
                        hover={true}
                        background="unset"
                        color="white"
                        width="58px"
                        height="58px"
                        onClick={() =>
                          productItem.quantity < 99 &&
                          setProductItem({
                            ...productItem,
                            quantity: productItem.quantity + 1,
                          })
                        }
                      >
                        <span style={{ fontSize: "20px" }}>+</span>
                      </Button>
                    </Col>
                  </Row>
                  <Button
                    className="m-1"
                    hover={true}
                    background="#c49b63"
                    color="white"
                    width="100%"
                    height="50px"
                    onClick={() => onAddToCart(productItem)}
                  >
                    Add To Card
                  </Button>
                </Form>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default Index;
