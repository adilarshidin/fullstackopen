const LogoutButton = () => {
  const handleLogout = () => {
    window.localStorage.removeItem("user");
    location.reload();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
