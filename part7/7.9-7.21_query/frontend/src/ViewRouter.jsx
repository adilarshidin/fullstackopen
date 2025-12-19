import { Routes, Route } from "react-router";

import Users from "./components/Users";
import Blogs from "./components/Blogs";
import UserBlogs from "./components/UserBlogs";
import BlogView from "./components/BlogView";

const ViewRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Blogs />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<BlogView />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserBlogs />} />
    </Routes>
  );
};

export default ViewRouter;
