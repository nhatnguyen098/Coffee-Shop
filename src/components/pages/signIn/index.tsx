import React, {useRef,useEffect} from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import Button from "../../atoms/buttons";
import * as Yup from "yup";
const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

interface IForm {
  email: string;
  password: string;
}
interface ILogin {
  onSubmitForm: (val: any) => void;
}
const LoginPage: React.FC<ILogin> = ({ onSubmitForm }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { register, handleSubmit,reset, errors } = useForm<IForm>({
    validationSchema: schema,
  });
  const onSubmit = handleSubmit(({ email, password }) => {
    onSubmitForm({ email, password });
  });
  useEffect(() => {
    if (inputRef.current) {
      register(inputRef.current)
      inputRef.current.focus()
    }
  }, [register])
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formBasicEmailLogin">
        <Form.Label>Email address:</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="Enter email"
          ref={inputRef}
        />
        {errors.email && (
          <Form.Text className="text-danger">{errors.email.message}</Form.Text>
        )}
      </Form.Group>

      <Form.Group controlId="formBasicPasswordLogin">
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
      <Form.Group controlId="formBasicCheckboxLogin">
        <Form.Check type="checkbox" label="Check me out"/>
      </Form.Group>
      <Button
        className="m-1"
        hover={true}
        background="#c49b63"
        color="white"
        onClick={() => onSubmit()}
      >
        Sign In
      </Button>
      <Button
        className="m-1"
        hover={true}
        background="unset"
        color="white"
        onClick={() => reset()}
      >
        Cancel
      </Button>
    </Form>
  );
};

export default LoginPage;
