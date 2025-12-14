import { useState } from "react";

import { loginRequest } from "../utils/requests";

const LoginForm = ({ setUserData, setNotificationObject }) => {
  const [usernameInput, setUsername] = useState("");
  const [passwordInput, setPassword] = useState("");

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
    } else {
      setNotificationObject({ message: loginResult.message, type: "error" });
      setTimeout(
        () =>
          setNotificationObject({
            message: "",
            type: "",
          }),
        5000,
      );
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
