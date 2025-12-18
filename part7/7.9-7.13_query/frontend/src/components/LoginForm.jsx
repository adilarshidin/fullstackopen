import { useState } from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";

import { loginRequest } from "../utils/requests";
import { notifyThunkAction } from "../reducers/notification";

const LoginForm = () => {
  const [usernameInput, setUsername] = useState("");
  const [passwordInput, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleUsernameInput = ({ target }) => {
    const newUsername = target.value;
    setUsername(newUsername);
  };

  const handlePasswordInput = ({ target }) => {
    const newPassword = target.value;
    setPassword(newPassword);
  };

  const loginMutation = useMutation({
    mutationFn: async () => await loginRequest(usernameInput, passwordInput),
    onError: (data) => {
      dispatch(notifyThunkAction({ message: data.message, type: "error" }));
    },
    onSuccess: (data) => {
      window.localStorage.setItem("user", JSON.stringify(data.data));
      setUsername("");
      setPassword("");
      location.reload();
    },
  });

  const handleLogin = async (event) => {
    event.preventDefault();
    loginMutation.mutate();
  };

  return (
    <form onSubmit={handleLogin}>
      <h3>Please enter your username and password to login</h3>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        value={usernameInput}
        onChange={handleUsernameInput}
      />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        value={passwordInput}
        onChange={handlePasswordInput}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
