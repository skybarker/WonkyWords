import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import LoginForm from "./components//LoginForm";
import RegisterForm from "./components/RegisterForm";
import StoryForm from "./components/StoryForm";
import ErrorPage from "./error-page";
import "./index.css";
import About from "./routes/About";
import Welcome from "./routes/Welcome";
import apiService from "./services/api.service";
import Profile from "./components/Profile";

const checkLogin = async ({ request }) => {
  const formData = await request.formData();
  return formData;
};


const createUser = async ({ request }) => {
  const formData = await request.formData();
  const user = {
    username: formData.get("username"),
    password: formData.get("password"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
  };
  await apiService.createUser(user);
  const response = await apiService.getUser(user.username, user.password);
  console.log(response);
  return redirect(`/profile/` + response[0].id);
};

const loadStories = async () => {
  const stories = await apiService.getAllStories();
  return stories;
};

const processResponses = async ({ request, params }) => {
  const formData = await request.formData();
  return formData;
};

const updateUser = async ({ params }) => {
  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: loadStories,
    shouldRevalidate: false,

    id: "app",
    children: [
      {
        index: "/",
        element: <LoginForm />,
        action: checkLogin,
        children: [
          {
            path: "/loginError",
            element: (
              <div className="text-center ">
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
        children: [
          {
            index: "/",
            element: (
              <button className="mt-2" type="submit">
                Register
              </button>
            ),
          },
        ],
      },
      {
        path: "/profile/:id",
        element: <Profile />,
        action: updateUser,
        children: [
          {
            index: "/",
            element: (
              <div className="mt-2">
                <button className="mx-2" type="submit">
                  Update
                </button>
                <button
                  className="mx-2"
                  data-method="DELETE"
                  data-disabled="true"
                >
                  Delete
                </button>
              </div>
            ),
          },
        ],
      },
      {
        path: "/welcome",
        element: <Welcome />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/story/:id",
        element: <StoryForm />,
        shouldRevalidate: false,
        action: processResponses,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
