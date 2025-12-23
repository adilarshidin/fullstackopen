import { useState } from "react";
import { useQuery, useApolloClient, useSubscription } from "@apollo/client/react"

import ViewRoutes from "./ViewRoutes";
import Menu from "./components/Menu";
import { BOOK_ADDED } from "./queries"

const App = () => {
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  useSubscription(BOOK_ADDED, {
    onData: ({ data }) => {
      const addedBook = data.data.bookAdded
      alert(`${JSON.stringify(addedBook)} added`)
    }
  })

  return (
    <div>
      <Menu token={token} setToken={setToken} />
      <ViewRoutes token={token} setToken={setToken} />
    </div>
  );
};

export default App;
