import PropTypes from "prop-types";
import Input from "./Input";
import { Form, Outlet } from "react-router-dom";

export default function RegisterForm({ onSubmit }) {
  return (
    <Form
      className="flex items-center text-center"
      method="post"
      onSubmit={onSubmit}
    >
      <p>Please enter the following information:</p>
      <Input id="username" label="Username" labelClass="not-sr-only" />
      <Input
        id="password"
        label="Password"
        type="password"
        labelClass="not-sr-only"
      />
      <Input id="firstName" label="First Name" labelClass="not-sr-only" />
      <Input id="lastName" label="Last Name" labelClass="not-sr-only" />
      <Outlet />
    </Form>
  );
}
RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
  onSubmit: () => {},
};
