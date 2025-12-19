import { useQuery } from "@tanstack/react-query";
import { useMatch } from "react-router";

import Blog from "./Blog";
import { getBlogsRequest } from "../utils/requests";

const UserBlogs = () => {
  const storedUser = window.localStorage.getItem("user");
  const userData = storedUser ? JSON.parse(storedUser) : null;
  const userMatch = useMatch("/users/:id");

  const blogsQuery = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogsRequest,
    refetchOnWindowFocus: false,
  });

  if (!userData) return null;

  if (blogsQuery.isLoading) return <div>Loading...</div>;
  const blogs = blogsQuery.data;
  const sortedBlogs = blogs.sort(
    (firstBlog, secondBlog) => secondBlog.likes - firstBlog.likes,
  );
  const matchedUserBlogs = userMatch ?
    blogs.map(blog => blog.user.id === userMatch.params.id ? blog : null) :
    null;

  return (
    <div>
      <h3>User: {userData.name}</h3>
      <hr />
      {matchedUserBlogs.map((blog) => (
        <Blog
          blog={blog}
          blogs={sortedBlogs}
          userData={userData}
        />
      ))}
    </div>
  );
};

export default UserBlogs;
