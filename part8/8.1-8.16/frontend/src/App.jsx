import { useState } from "react";

import ViewRoutes from "./ViewRoutes";
import Menu from "./components/Menu";

const App = () => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  return (
    <div>
      <Menu token={token} setToken={setToken} />
      <ViewRoutes token={token} setToken={setToken} />
    </div>
  );
};

export default App;
