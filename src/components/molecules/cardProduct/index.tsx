import React from "react";
import { Card } from "react-bootstrap";
import Button from "../../atoms/buttons";
import "./style.scss";
// import proImg from "../../../assets/images/menu-4.jpg";
interface ICardProduct {
  data:any;
  getIdToDetail: (id:any) => void
}
const Index:React.FC<ICardProduct> = ({ data,getIdToDetail }) => {
  const owlClass = "m-cardProduct";
  return (
    <Card className={owlClass} style={{ width: "100%" }} onClick = {() => getIdToDetail(data.id)}>
      <Card.Img className="text-center" variant="top" src={data.urlImage} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <Card.Text>${data.price}</Card.Text>
        <Button onClick = {() => getIdToDetail(data.id)} className="m-1" hover={true} background="#c49b63" color="white">
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Index;
