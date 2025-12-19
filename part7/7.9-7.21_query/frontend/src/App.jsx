import LoginForm from "./components/LoginForm";
import Notification from "./components/Notification";
import ViewRouter from "./ViewRouter";
import Menu from "./components/Menu";

const App = () => {
  const storedUser = window.localStorage.getItem("user");
  const userData = storedUser ? JSON.parse(storedUser) : null;

  return (
    <main className="container">
      <Notification />
      {!userData && <LoginForm />}
      {userData && <Menu />}
      <ViewRouter />
    </main>
  );
};

export default App;
