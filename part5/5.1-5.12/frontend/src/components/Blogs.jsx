import { useState, useEffect, useRef } from 'react';

import Blog from './Blog';
import BlogAdditionForm from './BlogAdditionForm';
import Togglable from './Togglable';

import { getBlogsRequest } from '../utils/requests';


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
          togglableRef={togglableRef} />
      </Togglable>
    </div>
  );
};

export default Blogs;
