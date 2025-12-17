import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import Togglable from "../components/Togglable";

import { deleteBlogRequest, updateBlogRequest } from "../utils/requests";
import { notifyThunkAction } from "../reducers/notification";

const blogStyles = {
  container: {
    border: "1px solid #ccc",
    padding: "16px",
    marginBottom: "16px",
    borderRadius: "8px",
    backgroundColor: "#fafafa",
  },

  titleWrapper: {
    display: "block",
    marginBottom: "8px",
  },

  title: {
    margin: 0,
  },

  text: {
    margin: "4px 0",
  },

  link: {
    color: "#0077cc",
    textDecoration: "none",
    margin: "4px 0",
    display: "inline-block",
  },

  authorNote: {
    margin: "4px 0",
    fontStyle: "italic",
  },

  deleteButton: {
    padding: "6px 12px",
    backgroundColor: "#d9534f",
    border: "none",
    color: "white",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "8px",
  },

  likeButton: {
    margin: "8px 0 8px 0",
    transition: "background-color 0.2s ease",
    padding: "6px 12px",
    backgroundColor: "darkgreen",
    border: "none",
    color: "white",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
  },

  likeButtonHover: {
    backgroundColor: "#218838",
  },
};

const Blog = ({ blog, userData }) => {
  const [hover, setHover] = useState(false);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const deleteBlogMutation = useMutation({
    mutationFn: async () => await deleteBlogRequest(blog.id, userData.token),
    onError: (data) => {
      dispatch(notifyThunkAction({ message: data.message, type: "error" }));
    },
    onSuccess: (data) => {
      dispatch(notifyThunkAction({ message: data.message, type: "success" }));
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });

  const updateBlogMutation = useMutation({
    mutationFn: async () => {
      const newBlog = { ...blog, user: blog.user.id, likes: blog.likes + 1 };
      return await updateBlogRequest(newBlog, userData.token);
    },
    onError: (data) => {
      dispatch(notifyThunkAction({ message: data.message, type: "error" }));
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["blogs"], (oldBlogs) =>
        oldBlogs.map((oldBlog) => (oldBlog.id === blog.id ? data.data : blog)),
      );
    },
  });

  if (!blog || !userData) return null;

  return (
    <div style={blogStyles.container} className="blog">
      <span style={blogStyles.titleWrapper}>
        <h4 style={blogStyles.title}>{blog.title}</h4>
        <p style={blogStyles.text}>Author: {blog.author}</p>
      </span>
      <Togglable buttonLabel="View">
        <p style={blogStyles.text}>Likes: {blog.likes}</p>
        <a href={blog.url} style={blogStyles.link}>
          link
        </a>
        <p style={blogStyles.authorNote}>Written by {blog.user.name}</p>
        <button
          style={{
            ...blogStyles.deleteButton,
            display: blog.user.id === userData.id ? "" : "none",
          }}
          onClick={() => deleteBlogMutation.mutate()}
        >
          Delete blog
        </button>
        <button
          style={{
            ...blogStyles.likeButton,
            backgroundColor: hover
              ? blogStyles.likeButtonHover.backgroundColor
              : blogStyles.likeButton.backgroundColor,
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => updateBlogMutation.mutate()}
        >
          ❤️ Like
        </button>
      </Togglable>
    </div>
  );
};

export default Blog;
