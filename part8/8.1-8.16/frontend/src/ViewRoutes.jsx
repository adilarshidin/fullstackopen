import { Routes, Route } from "react-router";

import Authors from "./components/Authors";
import Books from "./components/Books"
import NewBook from "./components/NewBook";
import LoginForm from "./components/LoginForm";
import FavoriteGenre from "./components/FavoriteGenre";

const ViewRoutes = ({ token, setToken }) => {
  if (!token) {
    return (
      <Routes>
        <Route path="/login" element={<LoginForm setToken={setToken} />} />
      </Routes>
    )
  } else {
    return (
      <Routes>
        <Route path="/" element={<Authors />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/add" element={<NewBook />} />
        <Route path="/books/favorite" element={<FavoriteGenre />} />
      </Routes>
    )
  }
}

export default ViewRoutes;
