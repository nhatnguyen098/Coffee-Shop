import React from "react";
import { ButtonGroup } from "react-bootstrap";
import Button from "../../atoms/buttons";
import "./style.scss";
const Index = () => {
  const owlClass = "m-btnGroup";
  return (
    <section className={owlClass}>
      <ButtonGroup>
        <Button
          size="1.5em"
          border="#c49b63"
          background="unset"
          className="m-2"
          hover={true}
          color="#c49b63"
        >
          Coffee
        </Button>
        <Button
          size="1.5em"
          border="#c49b63"
          background="unset"
          className="m-2"
          hover={true}
          color="#c49b63"
        >
          Drinks
        </Button>
        <Button
          size="1.5em"
          border="#c49b63"
          background="unset"
          className="m-1"
          hover={true}
          color="#c49b63"
        >
          Main Disk
        </Button>
      </ButtonGroup>
    </section>
  );
};

export default Index;
