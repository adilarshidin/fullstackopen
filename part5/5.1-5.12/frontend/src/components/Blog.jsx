import { useState } from 'react';

import Togglable from '../components/Togglable';

import { deleteBlogRequest, updateBlogRequest } from '../utils/requests';


const Blog = ({ blog, blogs, setBlogs, userData, setNotificationObject }) => {
  const [hover, setHover] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(blog.likes);

  if (!blog || !userData) return null;

  const blogStyles = {
    container: {
      border: '1px solid #ccc',
      padding: '16px',
      marginBottom: '16px',
      borderRadius: '8px',
      backgroundColor: '#fafafa',
    },

    titleWrapper: {
      display: 'block',
      marginBottom: '8px',
    },

    title: {
      margin: 0,
    },

    text: {
      margin: '4px 0',
    },

    link: {
      color: '#0077cc',
      textDecoration: 'none',
      margin: '4px 0',
      display: 'inline-block',
    },

    authorNote: {
      margin: '4px 0',
      fontStyle: 'italic',
    },

    deleteButton: {
      padding: '6px 12px',
      backgroundColor: '#d9534f',
      border: 'none',
      color: 'white',
      borderRadius: '4px',
      cursor: 'pointer',
      marginTop: '8px',
    },

    likeButton: {
      margin: '8px 0 8px 0',
      transition: 'background-color 0.2s ease',
      padding: '6px 12px',
      backgroundColor: 'darkgreen',
      border: 'none',
      color: 'white',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      display: 'flex',
      alignItems: 'center',
    },

    likeButtonHover: {
      backgroundColor: '#218838',
    },
  };

  const handleBlogDeletion = async () => {
    const blogDeletionResult = await deleteBlogRequest(blog.id, userData.token);
    if (!blogDeletionResult.result) {
      setNotificationObject({ message: blogDeletionResult.message, type: 'error' });
      setTimeout(() => setNotificationObject({
        message: '', type: ''
      }), 5000);
    } else {
      const newBlogs = blogs.filter(currentBlog => currentBlog.id === blog.id ? '' : currentBlog);
      setBlogs(newBlogs);
      setNotificationObject({ message: blogDeletionResult.message, type: 'success' });
      setTimeout(() => setNotificationObject({ message: '', type: '' }), 5000);
    };
  };

  const handleLike = async () => {
    const userId = blog.user.id;
    const newBlog = { ...blog, user: userId, likes: currentLikes + 1 };
    const updateBlogResult = await updateBlogRequest(newBlog, userData.token);
    if (updateBlogResult.result) {
      const newBlogs = blogs.map(currentBlog => currentBlog.id === updateBlogResult.id
        ? updateBlogResult.data : currentBlog
      );
      setCurrentLikes(currentLikes + 1);
      setBlogs(newBlogs);
    } else {
      setNotificationObject({ message: updateBlogResult.message, type: 'error' });
      setTimeout(() => setNotificationObject({ message: '', type: '' }), 5000);
    };
  };

  return (
    <div style={blogStyles.container}>
      <span style={blogStyles.titleWrapper}>
        <h4 style={blogStyles.title}>{blog.title}</h4>
        <p style={blogStyles.text}>Author: {blog.author}</p>
      </span>
      <Togglable buttonLabel='View'>
        <p style={blogStyles.text}>Likes: {currentLikes}</p>
        <a href={blog.url} style={blogStyles.link}>link</a>
        <p style={blogStyles.authorNote}>Written by {blog.user.name}</p>
        <button style={{ ...blogStyles.deleteButton,
          display: blog.user.id === userData.id ? '' : 'none' }}
        onClick={handleBlogDeletion}>Delete blog</button>
        <button style={{ ...blogStyles.likeButton,
          backgroundColor: hover
            ? blogStyles.likeButtonHover.backgroundColor
            : blogStyles.likeButton.backgroundColor }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={handleLike}>❤️ Like</button>
      </Togglable>
    </div>
  );
};

export default Blog;
