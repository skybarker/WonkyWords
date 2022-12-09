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
import Welcome from "./routes/welcome";
import apiService from "./services/api.service";

const checkLogin = async ({ request }) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  const response = await apiService.getUser(username, password);

  return response.length ? redirect(`/welcome`) : redirect("/");
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    shouldRevalidate: () => {
      return false;
    },
    children: [
      {
        index: "/login",
        element: <LoginForm />,
        action: checkLogin,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
