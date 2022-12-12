import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ErrorPage from "./error-page";
import "./index.css";
import Welcome from "./routes/Welcome";
import About from "./routes/About";
import apiService from "./services/api.service";

const checkLogin = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  const response = await apiService.getUser(username, password);

  return response.length ? redirect(`/welcome`) : redirect("/loginError");
};

const createUser = async ({ request }) => {
  const formData = await request.formData();
  const user = {
    username: formData.get("username"),
    password: formData.get("password"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
  };
  console.log(user);
  await apiService.createUser(user);
  return null;
};

const loadStories = async () => {
  const stories = await apiService.getAllStories();
  return stories;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: loadStories,
    shouldRevalidate: () => {
      return false;
    },
    id: "app",
    children: [
      {
        index: "/login",
        element: <LoginForm />,
        action: checkLogin,
        children: [
          {
            path: "/loginError",
            element: (
              <div>
                Oh no, that didn't work...please try again or click register if
                you need to create an account!
              </div>
            ),
          },
        ],
      },
      {
        path: "/register",
        element: <RegisterForm />,
        action: createUser,
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
