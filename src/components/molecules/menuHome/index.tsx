import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import Button from "../../atoms/buttons";
import menu_1 from "../../../assets/images/menu-1.jpg";
import menu_2 from "../../../assets/images/menu-2.jpg";
import menu_3 from "../../../assets/images/menu-3.jpg";
import menu_4 from "../../../assets/images/menu-4.jpg";
import "./style.scss";
const Index = () => {
  const owlClass = "m-menu";
  return (
    <Row className={owlClass}>
      <Col md={6} className={`${owlClass}-col_left`}>
        <h2 className={`${owlClass}-col_left-h2`}>Discover</h2>
        <h1 className={`${owlClass}-col_left-h1`}>OUR STORY</h1>
        <p className={`${owlClass}-col_left-p`}>
          On her way she met a copy. The copy warned the Little Blind Text, that
          where it came from it would have been rewritten a thousand times and
          everything that was left from its origin would be the word "and" and
          the Little Blind Text should turn around and return to its own, safe
          country. But nothing the copy said could convince her and so it didn’t
          take long until a few insidious Copy Writers ambushed her, made her
          drunk with Longe and Parole and dragged her into their agency, where
          they abused her for their.
        </p>
        <Button className="m-1" hover={true} background="#c49b63" color="white">
          View Full Menu
        </Button>
      </Col>
      <Col md={6} className={`${owlClass}-col_right`}>
        <Image className="w-50 p-3" src={menu_1} />

        <Image className="w-50 p-3 pt-5" src={menu_2} />

        <Image className="w-50 p-3" src={menu_3} />

        <Image className="w-50 p-3 pt-5" src={menu_4} />
      </Col>
    </Row>
  );
};

export default Index;
