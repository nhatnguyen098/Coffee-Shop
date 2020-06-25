import React from "react";
import { Carousel } from "react-bootstrap";
import Button from "../../atoms/buttons";
import "./style.scss";
import { arr } from "../../../constants/arrCarousel";
interface ICarouselItem {
  key: number;
  img: string;
  title: string;
  text: string;
}
interface ICarousel {
  arrCarousel?: ICarouselItem[];
}

const Index: React.FC<ICarousel> = ({ arrCarousel }) => {
  const owlClass = "carousel";
  const mapItemToCarousel = (arr: any) => {
    let rs = null;
    rs = arr.map((item: any, i: number) => {
      return (
        <Carousel.Item key={i} className={`${owlClass}-item`}>
          <img
            className={`${owlClass}-item-img d-block`}
            src={item.img}
            alt="First slide"
            style={{ height: "800px", width: "100%" }}
          />
          <Carousel.Caption
            style={{ bottom: "35%", right: "30%", left: "30%" }}
          >
            <span
              style={{
                color: "#c49b63",
                fontSize: "30px",
                fontFamily: "Great Vibes",
              }}
            >
              Welcome
            </span>
            <h1 className="mb-4">{item.title}</h1>
            <p className="mb-4 mb-md-5">{item.text}</p>
            <div className="d-flex justify-content-center align-item-center">
              <Button
                className="m-1"
                hover={true}
                background="#c49b63"
                color="white"
              >
                Order Now
              </Button>
              <Button
                className="m-1"
                hover={true}
                background="unset"
                color="white"
              >
                View Detail
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
    return rs;
  };
  return (
    <Carousel className={owlClass}>
      {mapItemToCarousel(arr)}
    </Carousel>
  );
};

export default Index;
