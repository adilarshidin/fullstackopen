import { useState } from "react";

import { loginRequest } from "../utils/requests";


const LoginForm = ({ setUserToken, setUserName }) => {
  const [usernameInput, setUsername] = useState('');
  const [passwordInput, setPassword] = useState('');

  const handleUsernameInput = ({ target }) => {
    const newUsernameInput = target.value;
    setUsername(newUsernameInput);
  };

  const handlePasswordInput = ({ target }) => {
    const newPasswordInput = target.value;
    setPassword(newPasswordInput);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const loginResponse = await loginRequest(usernameInput, passwordInput);
    const token = loginResponse.token;
    const name = loginResponse.name;
    window.localStorage.setItem('user', JSON.stringify(loginResponse));
    setUserToken(token);
    setUserName(name);
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <label htmlFor="username">Username</label>
      <input id="username" value={usernameInput} onChange={handleUsernameInput} />
      <label htmlFor="password">Password</label>
      <input id="password" value={passwordInput} onChange={handlePasswordInput} />
      <button type="submit">Login</button>
    </form>
  )
};

export default LoginForm;
