import Input from "./Input";
import { Form } from "react-router-dom";

export default function RegisterForm() {
  return (
    <Form method="post">
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
      <button type="submit">Register</button>
    </Form>
  );
}
