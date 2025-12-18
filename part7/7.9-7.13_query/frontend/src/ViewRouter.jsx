import { Routes, Route } from "react-router";

import Users from "./components/Users";
import Blogs from "./components/Blogs";

const ViewRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<Blogs />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default ViewRouter;
