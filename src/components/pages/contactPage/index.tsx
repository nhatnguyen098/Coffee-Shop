import React from "react";
import { Row, Col } from "react-bootstrap";
const Index = () => {
  return (
    <Row>
      <Col md={12}></Col>
      <Col md={12}>
        <iframe
          title="google_map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7838.973424867046!2d106.68980352599777!3d10.77398546929266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3959037bc1%3A0xd6bbd8e1507b0468!2sB%E1%BA%BFn%20Th%C3%A0nh%2C%20District%201%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1592419561780!5m2!1sen!2s"
          width="100%"
          height="350"
          style={{ border: "0" }}
        ></iframe>
      </Col>
    </Row>
  );
};

export default Index;
