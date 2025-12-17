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
  const [notificationObject, setNotificationObject] = useState({});

  return (
    <main>
      <h2>Blogs App</h2>
      <Notification
        message={notificationObject.message}
        type={notificationObject.type}
      />
      {!userData && (
        <LoginForm
          setUserData={setUserData}
          setNotificationObject={setNotificationObject}
        />
      )}
      {userData && <LogoutButton />}
      {userData && (
        <Blogs
          userData={userData}
          setNotificationObject={setNotificationObject}
        />
      )}
    </main>
  );
};

export default App;
