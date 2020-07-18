import React from "react";
import { Card } from "react-bootstrap";
import Button from "../../atoms/buttons";
import "./style.scss";
import LazyLoadingImage from "../../atoms/lazyLoadingImage";
interface ICardProduct {
  data:any;
  getIdToDetail: (id:any) => void
}
const Index:React.FC<ICardProduct> = ({ data,getIdToDetail }) => {
  const owlClass = "m-cardProduct";
  return (
    <Card className={owlClass} style={{ width: "100%" }} onClick = {() => getIdToDetail(data.id)}>
      <LazyLoadingImage height = '320px' width = '320px' className="text-center" src={data.urlImage}/>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <Card.Text>${data.price}</Card.Text>
        <Button onClick = {() => getIdToDetail(data.id)} className="m-1" hover={true} background="#c49b63" color="white">
          View Detail
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Index;
