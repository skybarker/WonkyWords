import {
  Form,
  Link,
  Outlet,
  useActionData,
  useNavigate,
} from "react-router-dom";
import Input from "./Input";
import apiService from "../services/api.service";

export default function LoginForm() {
  const formData = useActionData();
  const destination = useNavigate();

  const handleLogin = async () => {
    const username = formData.get("username");
    const password = formData.get("password");
    const response = await apiService.getUser(username, password);

    if (response.length) {
      destination(`/welcome/`);
    } else {
      destination(`/loginError`);
    }
  };
  return (
    <Form className="flex items-center" method="post" onSubmit={handleLogin}>
      <Input id="username" label="username" />
      <Input id="password" label="password" type="password" />
      <div className="flex items-center gap-x-5">
        <button type="submit">Login</button>
        <Link to={`/register/`} className="px-4 bg-green-400 rounded-md">
          Register
        </Link>
      </div>
      <Outlet />
    </Form>
  );
}
