import React from "react";
import { OverlayTrigger, Popover, Media, Nav } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
const Index = ({ data,onDeleteCart }: any) => {
  return (
    <OverlayTrigger
      trigger="click"
      key="cart"
      placement="bottom"
      overlay={
        <Popover id={`popover-positioned-bottom`}>
          <Popover.Title as="h3">Cart</Popover.Title>
          <Popover.Content>
            <ul className="list-unstyled">
              {data &&
                data.map((item: any, i: number) => {
                  return (
                    <Media as="li" key = {i}>
                      <img
                        width={64}
                        height={64}
                        className="mr-3"
                        src={item.urlImage}
                        alt="image"
                      />
                      <Media.Body>
                        <h5>{data.name}</h5>
                        <p>
                            {item.quantity} x {item.price}
                        </p>
                        <button onClick = {() => onDeleteCart(item.id)}>x</button>
                      </Media.Body>
                    </Media>
                  );
                })}
            </ul>
          </Popover.Content>
        </Popover>
      }
    >
      <Nav.Link>
        <FaShoppingCart size="1.5em" color="white" />
      </Nav.Link>
    </OverlayTrigger>
  );
};

export default Index;
