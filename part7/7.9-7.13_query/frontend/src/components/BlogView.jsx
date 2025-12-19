import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useMatch } from "react-router";
import { useDispatch } from "react-redux";

import { getBlogsRequest, updateBlogRequest } from "../utils/requests";
import { notifyThunkAction } from "../reducers/notification";

const BlogView = () => {
  const [commentInput, setCommentInput] = useState("");
  const storedUser = window.localStorage.getItem("user");
  const userData = JSON.parse(storedUser);
  const dispatch = useDispatch();

  const blogMatch = useMatch("/blogs/:id");

  const blogsQuery = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogsRequest
  });

  const blogsMutation = useMutation({
    mutationFn: async (blog, token) => updateBlogRequest(blog, token),
    onError: (data) => {
      dispatch(notifyThunkAction({ message: data.message, type: "error" }));
    },
    onSuccess: (data) => {
      console.log(data);
    }
  });

  if (blogsQuery.isLoading) return <div>Loading...</div>;
  const blogs = blogsQuery.data;
  const matchedBlog = blogs.find(blog => blog.id === blogMatch.params.id);

  const handleCommentInput = ({ target }) => setCommentInput(target.value);
  const handleComment = (event) => {
    event.preventDefault();
    matchedBlog.comments.push(commentInput);
    setCommentInput("");
    const formattedMatchedBlog = { ...matchedBlog, user: matchedBlog.user.id };
    blogsMutation.mutate(formattedMatchedBlog, userData.token);
  };

  return (
    <div>
      <h2>{matchedBlog.title}</h2>
      <p>Author: {matchedBlog.author}</p>
      <p>URL: {matchedBlog.url}</p>
      <p>Likes: {matchedBlog.likes}</p>
      <p>Created by user: {matchedBlog.user.name}</p>

      <div>
        <h3>Comments</h3>
        <ul>
          {matchedBlog.comments ? matchedBlog.comments.map(comment =>
            <li>{comment}</li>
          ) : null}
        </ul>
      </div>

      <form onSubmit={handleComment}>
        <input value={commentInput} onChange={handleCommentInput} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogView;
