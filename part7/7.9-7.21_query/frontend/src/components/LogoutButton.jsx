import { Button } from "react-bootstrap";

const LogoutButton = () => {
  const handleLogout = () => {
    window.localStorage.removeItem("user");
    location.replace("/");
  };

  return <Button variant="warning" onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
