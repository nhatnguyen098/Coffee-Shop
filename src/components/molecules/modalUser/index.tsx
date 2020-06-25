import React from "react";
import { Modal } from "react-bootstrap";
import Button from "../../atoms/buttons";
import TabsUserForm from "../tabsUserForm";

import "./style.scss";
const Index = (props:any) => {
  const owlClass = "m-modalUser";
  return (
    <Modal
    {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className={owlClass}
      backdrop = {false}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign In & Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TabsUserForm />
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="m-1"
          hover={true}
          background="#c49b63"
          color="white"
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Index;
