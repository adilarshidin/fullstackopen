import { useState } from "react";
import { useDispatch } from "react-redux";

import { loginRequest } from "../utils/requests";
import { notifyThunkAction, clearThunkAction } from "../reducers/notification";

const LoginForm = ({ setUserData }) => {
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

  const handleLogin = async (event) => {
    event.preventDefault();
    const loginResult = await loginRequest(usernameInput, passwordInput);

    if (loginResult.result) {
      await window.localStorage.setItem(
        "user",
        JSON.stringify(loginResult.data),
      );
      setUserData(loginResult.data);
      setUsername("");
      setPassword("");
      dispatch(
        notifyThunkAction(
          { type: "SUCCESS", message: `${loginResult.data.name} successfully logged in.` }
        ));
      dispatch(clearThunkAction({}));
    } else {
      dispatch(
        notifyThunkAction(
          { type: "ERROR", message: loginResult.message }
        ));
      dispatch(clearThunkAction({}));
    }
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
