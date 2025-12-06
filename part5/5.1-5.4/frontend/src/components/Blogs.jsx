import { useState, useEffect } from "react";

import Blog from "./Blog";
import BlogAdditionForm from "./BlogAdditionForm";

import { getBlogsRequest } from "../utils/requests";


const Blogs = ({ userData, setNotificationObject }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const newBlogs = await getBlogsRequest();
      setBlogs(newBlogs);
    };

    getBlogs();
  }, []);

  if (!blogs) return null;

  return (
    <div>
      <h3>User: {userData.name}</h3>
      <hr />
      {blogs.map(blog => <Blog blog={blog}
                               blogs={blogs}
                               setBlogs={setBlogs} 
                               userToken={userData.token}
                               setNotificationObject={setNotificationObject} />)}
      <BlogAdditionForm blogs={blogs}
                        setBlogs={setBlogs}
                        userData={userData}
                        setNotificationObject={setNotificationObject} />
    </div>
  )
};

export default Blogs;
