import { useState, useEffect } from "react";

import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";
import Blogs from "./components/Blogs";
import Notification from "./components/Notification";


const App = () => {
  const [userData, setUserData] = useState({});
  const [userToken, setUserToken] = useState('');
  const [notificationObject, setNotificationObject] = useState({});

  const getLocalStorage = () => {
    const newUserData = JSON.parse(window.localStorage.getItem('user'));
    if (newUserData) {
      setUserData(newUserData);
      setUserToken(newUserData.token);
    };
  };
  useEffect(getLocalStorage, [userData]);

  const loginForm = () => <LoginForm setUserToken={setUserToken}
                                     setUserData={setUserData}
                                     setNotificationObject={setNotificationObject} />;
  const logoutButton = () => <LogoutButton />;
  const blogsBlock = () => <Blogs userData={userData}
                                  setNotificationObject={setNotificationObject} />

  return (
    <main>
      <h2>Blogs App</h2>
      <Notification message={notificationObject.message} type={notificationObject.type} />
      {!userToken && loginForm()}
      {userToken && logoutButton()}
      {userToken && blogsBlock()}
    </main>
  )
};

export default App;
