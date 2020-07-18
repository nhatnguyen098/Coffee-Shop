import React, { useState } from "react";
import { OverlayTrigger, Popover, Media, Nav, Image } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import Button from "../../atoms/buttons";
import "./style.scss";
import { useHistory } from "react-router-dom";
const Index = ({ data, onDeleteCart }: any) => {
  const [totalPrice, setTotalPrice] = useState<number>();
  const history = useHistory();
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
          style={{
            backgroundColor: `rgba(0, 0, 0, 0.5)`,
            color: "white",
            width: "100%",
          }}
        >
          <Popover.Title
            className="text-center"
            style={{
              backgroundColor: `rgba(0, 0, 0, 0.5)`,
              fontWeight: "bold",
              color: "#c49b63",
            }}
            as="h2"
          >
            Cart List
          </Popover.Title>
          <Popover.Content style={{ color: "white" }}>
            <ul className="list-unstyled">
              {data && data.length > 0 ? (
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
                        <p style={{ color: "#c49b63" }}>
                          ${item.price} x {item.quantity} = $
                          {Number(item.price) * Number(item.quantity)}
                        </p>
                      </Media.Body>
                      <Button
                        className="m-1"
                        hover={true}
                        background="#c49b63"
                        color="white"
                        onClick={() => onDeleteCart(item.id)}
                      >
                        x
                      </Button>
                    </Media>
                  );
                })
              ) : (
                <Media as="li">
                  <Media.Body>
                    <h5 className = 'text-center'>No items in cart</h5>
                  </Media.Body>
                </Media>
              )}
            </ul>
          </Popover.Content>
          <section
            className="d-flex"
            style={{
              borderTop: "1px solid white",
              justifyContent: "space-between",
            }}
          >
            <Popover.Title
              style={{
                backgroundColor: `rgba(0, 0, 0, 0.5)`,
                fontWeight: "bold",
                color: "#c49b63",
              }}
              as="h2"
            >
              Total: ${totalPrice}
            </Popover.Title>
            <Button
              className="m-1"
              hover={true}
              background="#c49b63"
              color="white"
              onClick={() => history.push("/cart")}
            >
              View all
            </Button>
          </section>
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
