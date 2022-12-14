import { useState } from "react";

export default function useLogin() {
  const [loggedInUser, setLoggedInUser] = useState();

  const login = (user) => {
    setLoggedInUser(user);
  };

  const logout = () => {
    setLoggedInUser(null);
  };

  return [loggedInUser, login, logout];
}
