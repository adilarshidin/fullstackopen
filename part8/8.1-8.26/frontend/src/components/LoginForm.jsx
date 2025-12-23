import { useState } from "react";
import { useMutation } from "@apollo/client/react";

import { LOGIN } from "../queries";

const LoginForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useMutation(LOGIN, {
    onError: (error) => alert(error.message),
  });

  const handleLogin = async (event) => {
    event.preventDefault();
    const result = await login({ variables: { username, password } });
    if (await result.data) {
      const { value, favoriteGenre } = result.data.login;
      localStorage.setItem("token", value);
      localStorage.setItem("favoriteGenre", favoriteGenre);
      setToken(value);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      username
      <input
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      password
      <button>Submit</button>
    </form>
  );
};

export default LoginForm;
