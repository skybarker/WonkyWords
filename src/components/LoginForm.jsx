import { Form, Link } from "react-router-dom";
import Input from "./Input";

export default function LoginForm() {
  return (
    <Form
      className="flex flex-col gap-y-4 px-4 max-w-3xl border-2"
      method="post"
    >
      <Input id="username" label="username" />
      <Input id="password" label="password" type="password" />
      <div className="flex items-center gap-x-5">
        <button type="submit" className="px-4 bg-green-300 rounded-md">
          Login
        </button>
        <Link to={`/register/`} className="px-4 bg-green-300 rounded-md">
          Register
        </Link>
      </div>
    </Form>
  );
}
