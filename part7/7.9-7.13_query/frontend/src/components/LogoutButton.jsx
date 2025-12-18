const LogoutButton = () => {
  const handleLogout = () => {
    window.localStorage.removeItem("user");
    location.replace("/");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
