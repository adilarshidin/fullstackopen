import { useState, useEffect, useRef } from 'react';

import Blog from './Blog';
import BlogAdditionForm from './BlogAdditionForm';
import Togglable from './Togglable';

import { getBlogsRequest, addBlogRequest } from '../utils/requests';


const Blogs = ({ userData, setNotificationObject }) => {
  const [blogs, setBlogs] = useState([]);
  const togglableRef = useRef();

  useEffect(() => {
    const getBlogs = async () => {
      const newBlogs = await getBlogsRequest(userData.token);
      setBlogs(newBlogs);
    };

    getBlogs();
  }, [userData]);

  if (!blogs || !userData) return null;

  const sortedBlogs = blogs.sort((firstBlog, secondBlog) => secondBlog.likes - firstBlog.likes);

  const handleCreateBlog = async (newBlog) => {
    const addBlogResult = await addBlogRequest(newBlog, userData.id, userData.token);

    if (!addBlogResult.result) {
      setNotificationObject({
        message: addBlogResult.message,
        type: 'error'
      });
      setTimeout(() => setNotificationObject({
        message: '', type: ''
      }), 5000);
    } else {
      const newBlogs = blogs.concat({
        id: addBlogResult.data.id,
        author: newBlog.author,
        title: newBlog.title,
        likes: addBlogResult.data.likes,
        url: newBlog.url,
        user: {
          name: userData.name,
          id: userData.id
        }
      });
      setBlogs(newBlogs);
      await togglableRef.current.toggleVisibility();
      setNotificationObject({
        message: addBlogResult.message,
        type: 'success'
      });
      setTimeout(() => setNotificationObject({
        message: '', type: ''
      }), 5000);
    };
  };

  return (
    <div>
      <h3>User: {userData.name}</h3>
      <hr />
      {blogs.map(blog => <Blog blog={blog}
        blogs={sortedBlogs}
        setBlogs={setBlogs}
        userData={userData}
        setNotificationObject={setNotificationObject} />)}
      <Togglable buttonLabel='Add a new blog' ref={togglableRef}>
        <BlogAdditionForm blogs={sortedBlogs}
          setBlogs={setBlogs}
          userData={userData}
          setNotificationObject={setNotificationObject}
          togglableRef={togglableRef}
          handleCreateBlog={handleCreateBlog} />
      </Togglable>
    </div>
  );
};

export default Blogs;
