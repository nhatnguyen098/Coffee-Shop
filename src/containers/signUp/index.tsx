import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import Button from "../../components/atoms/buttons";
import { useDispatch, useSelector } from "react-redux";
import { add_new_user } from "../../redux/actions/users";
import * as Yup from "yup";
import Loading from '../../components/atoms/loading';

const schema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), undefined],
    "Passwords must match"
  ).required("Required"),
});

interface IForm {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface ISignUp {
  onSubmitForm?: (val: any) => void;
  onSignUpSuccess: () => void;
}
const Index: React.FC<ISignUp> = ({ onSubmitForm, onSignUpSuccess }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state:any) => state.users.loading);
  const [checked, setChecked] = React.useState(false);
  const { register, handleSubmit, reset, errors, getValues } = useForm<IForm>({
    validationSchema: schema,
  });
  const onSubmit = handleSubmit(({ email, password }) => {
    dispatch(add_new_user({ email, password }));
    reset();
    onSignUpSuccess();
  });

  return (
    <Form>
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
      <Form.Group>
        <Form.Label>Confirm Password:</Form.Label>
        <Form.Control
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          ref={register}
        />
        {errors.confirmPassword && (
          <Form.Text className="text-danger">
            {errors.confirmPassword.message}
          </Form.Text>
        )}
      </Form.Group>
      <Form.Group className="d-flex" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
        <a style={{color: '#c49b63'}} href="#">Term and Condition</a>
      </Form.Group>
      <Button
        disabled={!checked}
        className="m-1"
        hover={true}
        background="#c49b63"
        color="white"
        onClick={() => onSubmit()}
      >
        {loading ? <Loading width="25px" height="25px" /> : "Sign Up"}
      </Button>
    </Form>
  );
};

export default Index;
