import { Routes, Route } from "react-router";

import Authors from "./components/Authors";
import Books from "./components/Books"
import NewBook from "./components/NewBook";

const ViewRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Authors />} />
      <Route path="/authors" element={<Authors />} />
      <Route path="/books" element={<Books />} />
      <Route path="/books/add" element={<NewBook />} />
    </Routes>
  )
}

export default ViewRoutes;
