import React, { useState } from "react";
import { OverlayTrigger, Popover, Media, Nav,Image } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import Button from "../../atoms/buttons";
const Index = ({ data, onDeleteCart }: any) => {
  const [totalPrice, setTotalPrice] = useState<number>();
  React.useEffect(() => {
    let total = 0;
    if (data) {
      for (var i = 0; i < data.length; i++) {
        total += Number(data[i].price) * Number(data[i].quantity);
      }
    }
    setTotalPrice(total);
  }, [data]);
  return (
    <OverlayTrigger
      trigger="click"
      key="cart"
      placement="bottom"
      overlay={
        <Popover
          id={`popover-positioned-bottom`}
          style={{ backgroundColor: `#c49b63`, color: "black", width: "100%" }}
        >
          <Popover.Title
            className="text-center"
            style={{ backgroundColor: `#c49b63`, fontWeight: 'bold' }}
            as="h2"
          >
            Cart List
          </Popover.Title>
          <Popover.Content style={{ color: "black" }}>
            <ul className="list-unstyled">
              {data &&
                data.map((item: any, i: number) => {
                  return (
                    <Media as="li" key={i}>
                      <Image
                        width={64}
                        height={64}
                        className="mr-3"
                        src={item.urlImage}
                        alt="image"
                      />
                      <Media.Body>
                        <h5>{item.name}</h5>
                        <p>
                          ${item.price} x {item.quantity} = $
                          {Number(item.price) * Number(item.quantity)}
                        </p>
                      </Media.Body>
                      <Button
                        className="m-1"
                        hover={false}
                        background="unset"
                        color="white"
                        onClick={() => onDeleteCart(item.id)}
                      >
                        x
                      </Button>
                    </Media>
                  );
                })}
            </ul>
          </Popover.Content>
          <Popover.Title
            className="text-right"
            style={{ backgroundColor: `#c49b63`, borderTop: "1px solid white", fontWeight: 'bold' }}
            as="h2"
          >
            Total: ${totalPrice}
          </Popover.Title>
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
