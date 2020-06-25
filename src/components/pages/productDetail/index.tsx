import React, {useState} from "react";
import { Row, Col, Card, Form } from "react-bootstrap";
import Button from "../../atoms/buttons";
import "./style.scss";
interface IProDetail {
  data: any;
}
const Index: React.FC<IProDetail> = ({ data }) => {
  const owlClass = "p-productDetail";
  const [count,setCount] = useState<number>(1)
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
                <Form>
                  <Form.Group controlId="exampleForm.ControlSelect1" className = "mb-5 mt-5">
                    <Form.Control
                      as="select"
                      style={{
                        background: "unset",
                        color: "#c49b63",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        boxShadow: "unset",
                      }}
                    >
                      <option>Medium</option>
                      <option>Large</option>
                    </Form.Control>
                  </Form.Group>
                  <Row className = 'mt-5 mb-5'>
                    <Col md={3}>
                      <Button
                        className=""
                        hover={true}
                        background="unset"
                        color="white"
                        width = "58px"
                        height = "58px"
                        onClick = {() => count > 1 && setCount(count-1)}
                      >
                        <span style={{ fontSize: "20px" }}>-</span>
                      </Button>
                    </Col>
                    <Col md={6} className = "d-flex justify-content-center align-items-center" style = {{border:'1px solid #c49b63'}}>
                      {count}
                    </Col>
                    <Col md={3} className = "text-right">
                    <Button
                        className=""
                        hover={true}
                        background="unset"
                        color="white"
                        width = "58px"
                        height = "58px"
                        onClick = {() => count < 99 && setCount(count+1)}
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
                        width = "100%"
                        height = "50px"
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
