import { useState } from "react";
import { useDispatch } from "react-redux";

import Togglable from "./Togglable";

import { deleteBlogRequest, updateBlogRequest } from "../utils/requests";
import { notifyThunkAction, clearThunkAction } from "../reducers/notification";

const Blog = ({ blog, blogs, userData }) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(blog.likes);

  if (!blog || !userData) return null;

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

  const handleBlogDeletion = async () => {
    const blogDeletionResult = await deleteBlogRequest(blog.id, userData.token);
    if (!blogDeletionResult.result) {
      dispatch(notifyThunkAction({ type: "ERROR", message: blogDeletionResult.message }));
      dispatch(clearThunkAction());
    } else {
      const newBlogs = blogs.filter((currentBlog) =>
        currentBlog.id === blog.id ? "" : currentBlog,
      );
      dispatch(notifyThunkAction({ type: "SUCCESS", message: blogDeletionResult.message }));
      dispatch(clearThunkAction({}));
    }
  };

  const handleLike = async () => {
    const userId = blog.user.id;
    const newBlog = { ...blog, user: userId, likes: currentLikes + 1 };
    const updateBlogResult = await updateBlogRequest(newBlog, userData.token);
    if (updateBlogResult.result) {
      const newBlogs = blogs.map((currentBlog) =>
        currentBlog.id === updateBlogResult.id
          ? updateBlogResult.data
          : currentBlog,
      );
      setCurrentLikes(currentLikes + 1);
    } else {
      dispatch(notifyThunkAction({ type: "ERROR", message: updateBlogResult.message }));
      dispatch(clearThunkAction());
    }
  };

  return (
    <div style={blogStyles.container} className="blog">
      <span style={blogStyles.titleWrapper}>
        <h4 style={blogStyles.title}>{blog.title}</h4>
        <p style={blogStyles.text}>Author: {blog.author}</p>
      </span>
      <Togglable buttonLabel="View">
        <p style={blogStyles.text}>Likes: {currentLikes}</p>
        <a href={blog.url} style={blogStyles.link}>
          link
        </a>
        <p style={blogStyles.authorNote}>Written by {blog.user.name}</p>
        <button
          style={{
            ...blogStyles.deleteButton,
            display: blog.user.id === userData.id ? "" : "none",
          }}
          onClick={handleBlogDeletion}
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
          onClick={handleLike}
        >
          ❤️ Like
        </button>
      </Togglable>
    </div>
  );
};

export default Blog;
