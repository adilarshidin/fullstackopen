import { useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

import Blog from "./Blog";
import BlogAdditionForm from "./BlogAdditionForm";
import Togglable from "./Togglable";

import { getBlogsRequest, postBlogRequest } from "../utils/requests";
import { notifyThunkAction } from "../reducers/notification";

const Blogs = ({ userData, setNotificationObject }) => {
  const togglableRef = useRef();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const blogsQuery = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogsRequest,
    refetchOnWindowFocus: false,
  });

  const createBlogMutation = useMutation({
    mutationFn: async (newBlog) =>
      await postBlogRequest(newBlog, userData.id, userData.token),
    onError: (data) => {
      dispatch(notifyThunkAction({ message: data.message, type: "error" }));
    },
    onSuccess: (data) => {
      togglableRef.current.toggleVisibility();
      dispatch(notifyThunkAction({ message: data.message, type: "success" }));
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });

  if (blogsQuery.isLoading) return <div>Loading...</div>;
  const blogs = blogsQuery.data;
  const sortedBlogs = blogs.sort(
    (firstBlog, secondBlog) => secondBlog.likes - firstBlog.likes,
  );

  const handleCreateBlog = (newBlog) => createBlogMutation.mutate(newBlog);

  return (
    <div>
      <h3>User: {userData.name}</h3>
      <hr />
      {blogs.map((blog) => (
        <Blog
          blog={blog}
          blogs={sortedBlogs}
          userData={userData}
          setNotificationObject={setNotificationObject}
        />
      ))}
      <Togglable buttonLabel="Add a new blog" ref={togglableRef}>
        <BlogAdditionForm
          blogs={sortedBlogs}
          userData={userData}
          setNotificationObject={setNotificationObject}
          togglableRef={togglableRef}
          handleCreateBlog={handleCreateBlog}
        />
      </Togglable>
    </div>
  );
};

export default Blogs;
