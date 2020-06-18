import React from "react";
import { Card } from "react-bootstrap";
import Button from '../../atoms/buttons'
import "./style.scss";
import proImg from '../../../assets/images/menu-4.jpg'
const Index = () => {
  const owlClass = "m-cardProduct";
  return (
    <Card className = {owlClass} style={{ width: "100%" }}>
      <Card.Img className= "text-center" variant="top" src={proImg} />
      <Card.Body>
        <Card.Title>COFFEE CAPUCCINO</Card.Title>
        <Card.Text>
        A small river named Duden flows by their place and supplies
        </Card.Text>
        <Card.Text>
        $5.90
        </Card.Text>
        <Button className="m-1" hover={true} background="#c49b63" color="white">
        Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Index;
