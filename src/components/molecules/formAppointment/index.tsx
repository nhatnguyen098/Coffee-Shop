import React from "react";
import { useForm } from "react-hook-form";
import { Form, Row, Col, Button } from "react-bootstrap";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import TimePicker from "rc-time-picker";
import "./style.scss";
import "rc-time-picker/assets/index.css";
import "react-datepicker/dist/react-datepicker.css";

const schema = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  lastName:Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
});
interface IForm {
  firstName: string;
  lastName: string;
  phone: string;
  comment: string;
}
interface IAppointment {
  onSubmitForm: (val: any) => void;
}
const Index: React.FC<IAppointment> = ({ onSubmitForm }) => {
  const owlClass = "m-formAppointment";
  const [dateAppoint, setDateAppoint] = React.useState({
    date: new Date(),
    time: null,
  });
  const { register, handleSubmit, errors } = useForm<IForm>({
    validationSchema: schema,
  });
  const onSubmit = handleSubmit(({ firstName, lastName, comment, phone }) => {
    onSubmitForm({ firstName, lastName, comment, phone, date: dateAppoint.date, time :dateAppoint.time});
  });
  return (
    <React.Fragment>
      <h2 style={{ color: "white" }}>Book a Table</h2>
      <Form className={owlClass} onSubmit={onSubmit}>
        <Row className={`${owlClass}-row`}>
          <Col>
            <Form.Group>
              <Form.Control
                name="firstName"
                type="text"
                placeholder="First Name"
                style={{
                  background: "unset",
                  color: "white",
                  border: "unset",
                  borderBottom: "1px solid gray",
                  borderRadius: "unset",
                  boxShadow: "unset",
                }}
                ref={register}
              />
              {errors.firstName && (
                <Form.Text className="text-danger">
                  {errors.firstName.message}
                </Form.Text>
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Control
                name="lastName"
                type="text"
                placeholder="Last Name"
                style={{
                  background: "unset",
                  color: "white",
                  border: "unset",
                  borderBottom: "1px solid gray",
                  borderRadius: "unset",
                  boxShadow: "unset",
                }}
                ref={register}
              />
              {errors.lastName && (
                <Form.Text className="text-danger">
                  {errors.lastName.message}
                </Form.Text>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row className={`${owlClass}-row`}>
          <Col className={`${owlClass}-row-col`}>
            <DatePicker
              className={`${owlClass}-row-col-date`}
              selected={dateAppoint.date}
              onChange={(date: any) =>
                setDateAppoint({ ...dateAppoint, date: date })
              }
            />
          </Col>
          <Col className={`${owlClass}-row-col`}>
            <TimePicker
              className={`${owlClass}-row-col-time`}
              onChange={(time: any) =>
                setDateAppoint({ ...dateAppoint, time: time })
              }
              placeholder="Time"
            />
          </Col>
          <Col>
            <Form.Group>
              <Form.Control
                name="phone"
                type="text"
                placeholder="Phone"
                style={{
                  background: "unset",
                  color: "white",
                  border: "unset",
                  borderBottom: "1px solid gray",
                  borderRadius: "unset",
                  boxShadow: "unset",
                }}
                ref={register}
              />
              {errors.phone && (
                <Form.Text className="text-danger">
                  {errors.phone.message}
                </Form.Text>
              )}
            </Form.Group>
          </Col>
        </Row>
        <Row className={`${owlClass}-row`}>
          <Col>
            <Form.Group>
              <Form.Control
                name="comment"
                type="text"
                placeholder="Message"
                style={{
                  background: "unset",
                  color: "white",
                  border: "unset",
                  borderBottom: "1px solid gray",
                  borderRadius: "unset",
                  boxShadow: "unset",
                  width: "100%",
                }}
                ref={register}
              />
            </Form.Group>
          </Col>

          <Col>
            <Button
              className="m-1 w-100"
              style={{ color: "white", background: "#c49b63" }}
              type="submit"
              onClick={() => console.log("zxc")}
            >
              Appointment
            </Button>
          </Col>
        </Row>
      </Form>
    </React.Fragment>
  );
};

export default Index;
