import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Blog from "./Blog";
import BlogAdditionForm from "./BlogAdditionForm";
import Togglable from "./Togglable";

import { getBlogsThunkAction, createBlogThunkAction } from "../reducers/blogs";
import { notifyThunkAction, clearThunkAction } from "../reducers/notification";

const Blogs = ({ userData }) => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs);
  useEffect(() => {
    const getBlogs = () => {
      dispatch(getBlogsThunkAction(userData.token));
    };
    getBlogs();
  }, [dispatch, userData]);

  const togglableRef = useRef();

  if (!blogs || !userData) return null;

  let sortedBlogs = [];
  Object.assign(sortedBlogs, blogs);
  sortedBlogs.sort(
    (firstBlog, secondBlog) => secondBlog.likes - firstBlog.likes,
  );

  const handleCreateBlog = async (newBlog) => {
    dispatch(createBlogThunkAction(newBlog, userData.id, userData.token));
    await togglableRef.current.toggleVisibility();
    dispatch(notifyThunkAction({ type: "SUCCESS", message: "Successfully added a new blog." }));
    dispatch(clearThunkAction({}));
  };

  return (
    <div>
      <h3>User: {userData.name}</h3>
      <hr />
      {blogs.map((blog) => (
        <Blog
          blog={blog}
          blogs={sortedBlogs}
          userData={userData}
        />
      ))}
      <Togglable buttonLabel="Add a new blog" ref={togglableRef}>
        <BlogAdditionForm
          blogs={sortedBlogs}
          userData={userData}
          togglableRef={togglableRef}
          handleCreateBlog={handleCreateBlog}
        />
      </Togglable>
    </div>
  );
};

export default Blogs;
