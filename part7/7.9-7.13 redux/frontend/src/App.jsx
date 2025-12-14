import { useState } from "react";

import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";
import Blogs from "./components/Blogs";
import Notification from "./components/Notification";

const App = () => {
  const [userData, setUserData] = useState(() => {
    const storedUser = window.localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  return (
    <main>
      <h2>Blogs App</h2>
      <Notification />
      {!userData && (
        <LoginForm setUserData={setUserData} />
      )}
      {userData && <LogoutButton />}
      {userData && (
        <Blogs userData={userData} />
      )}
    </main>
  );
};

export default App;
