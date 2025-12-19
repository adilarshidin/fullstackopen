import { useQuery } from "@tanstack/react-query";
import { useMatch } from "react-router";
import { getBlogsRequest } from "../utils/requests";

const BlogView = () => {
  const blogMatch = useMatch("/blogs/:id");

  const blogsQuery = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogsRequest
  });
  if (blogsQuery.isLoading) return <div>Loading...</div>;
  const blogs = blogsQuery.data;
  const matchedBlog = blogs.find(blog => blog.id === blogMatch.params.id);

  return (
    <div>
      <h2>{matchedBlog.title}</h2>
      <p>Author: {matchedBlog.author}</p>
      <p>URL: {matchedBlog.url}</p>
      <p>Likes: {matchedBlog.likes}</p>
      <p>Created by user: {matchedBlog.user.name}</p>
    </div>
  );
};

export default BlogView;
