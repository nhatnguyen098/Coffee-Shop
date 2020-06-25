import React from "react";
import CardProduct from "../../molecules/cardProduct";
import { Row, Col } from "react-bootstrap";
import "./style.scss";
import ButtonGroup from "../../molecules/buttonGroup";
interface IProductList {
  proList: [];
  onGetProId: (id:any) => void
}
const ProductPage:React.FC<IProductList> = ({proList,onGetProId}) => {
  const owlClass = "o-productList";
  return (
    <section className={owlClass} style={{ margin: "unset" }}>
      <div className={`${owlClass}-btnGroup`}>
        <ButtonGroup />
      </div>

      <Row style={{ marginTop: "100px" }}>
        {proList.map((item: any, index: number) => {
          return (
            <Col key = {index} md = {3} style = {{marginBottom: '15px'}}>
              <CardProduct data = {item} getIdToDetail = {(val) => onGetProId(val)}/>
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default ProductPage;
