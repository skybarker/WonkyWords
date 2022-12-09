import Input from "./Input";
import { Form } from "react-router-dom";

export default function RegisterForm(){
  return(
    <Form>
      <Input id="username"
        label="username"
        labelClass="not-sr-only" />
      <Input id="password"
        label="password"
        labelClass="not-sr-only" />
      <Input id="firstName"
        label="First Name"
        labelClass="not-sr-only" />
      <Input id="lastName"
        label="Last Name"
        labelClass="not-sr-only" />
    </Form>
  )
}