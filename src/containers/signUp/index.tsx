import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add_new_user } from "../../redux/actions/users";
import * as Yup from "yup";
const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

interface IForm {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
}
interface ISignUp {
  onSubmitForm?: (val: any) => void;
}
const Index: React.FC<ISignUp> = ({ onSubmitForm }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm<IForm>({
    validationSchema: schema,
  });
  const onSubmit = handleSubmit(({ email, password }) => {
    dispatch(add_new_user({ email, password }));
  });

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address:</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          ref={register}
        />
        {errors.email && (
          <Form.Text className="text-danger">{errors.email.message}</Form.Text>
        )}
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          name="password"
          type="password"
          placeholder="Password"
          ref={register}
        />
        {errors.password && (
          <Form.Text className="text-danger">
            {errors.password.message}
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Index;
