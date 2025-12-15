import { useContext } from "react";

import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";
import Blogs from "./components/Blogs";
import Notification from "./components/Notification";

import { UserContext } from "./UserContext";

const App = () => {
  const { userData } = useContext(UserContext);

  return (
    <main>
      <h2>Blogs App</h2>
      <Notification />
      {!userData && <LoginForm />}
      {userData && <LogoutButton />}
      {userData && <Blogs userData={userData} />}
    </main>
  );
};

export default App;
