import { useState } from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { Form, Button } from "react-bootstrap";

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
    <Form onSubmit={handleLogin}>
      <h3>Please enter your username and password to login</h3>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="username"
          placeholder="enter username"
          value={usernameInput}
          onChange={handleUsernameInput} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="enter password"
          value={passwordInput}
          onChange={handlePasswordInput} />
      </Form.Group>

      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
};

export default LoginForm;
