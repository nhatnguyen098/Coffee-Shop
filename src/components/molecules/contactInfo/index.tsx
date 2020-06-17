import React from "react";
import Text from "../../atoms/texts";
import { Row, Col } from "react-bootstrap";
import "./style.scss";
import { FaPhoneAlt } from "react-icons/fa";
import {MdMyLocation} from 'react-icons/md';
import {WiTime3} from 'react-icons/wi'
const Index = () => {
  const owlClass = "m-info";
  return (
    <Row className={owlClass}>
      <Col className = {`${owlClass}-col`}>
        <Text>
          <FaPhoneAlt color="#c49b63" style = {{marginRight:'31px'}}/>
          000 (123) 456 7890
        </Text>
        <Text className = 'pl-5' color="gray">
          A small river named Duden flows by their place and supplies.
        </Text>
      </Col>
      <Col className = {`${owlClass}-col`}>
        <Text>
          <MdMyLocation color="#c49b63" style = {{marginRight:'31px'}}/>
          198 West 21th Street
        </Text>
        <Text className = 'pl-5' color="gray">
          198 West 21th Street 203 Fake St. Mountain View, San Francisco,
          California, USA
        </Text>
      </Col>
      <Col className = {`${owlClass}-col`}>
        <Text>
          <WiTime3 color="#c49b63" style = {{marginRight:'31px'}}/>
          Open Monday-Friday
        </Text>
        <Text className = 'pl-5' color="gray">8:00am - 9:00pm</Text>
      </Col>
    </Row>
  );
};

export default Index;
