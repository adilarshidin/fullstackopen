import { useState } from "react";
import { useQuery, useApolloClient, useSubscription } from "@apollo/client/react"

import ViewRoutes from "./ViewRoutes";
import Menu from "./components/Menu";
import { BOOK_ADDED, ALL_BOOKS } from "./queries"

const updateCache = (cache, query, addedBook) => {
  const uniqueByName = (book) => {
    let seen = new Set();
    return book.filter((item) => {
      let key = item.title
      return seen.has(key) ? false : seen.add(key)
    })
  }

  cache.updateQuery(query, ({ allBooks }) => {
    return {
      allBooks: uniqueByName(allBooks.concat(addedBook))
    }
  })
}

const App = () => {
  const client = useApolloClient()
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  useSubscription(BOOK_ADDED, {
    onData: ({ data }) => {
      const addedBook = data.data.bookAdded
      alert(`${JSON.stringify(addedBook)} added`)
      updateCache(client.cache, { query: ALL_BOOKS }, addedBook)
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
