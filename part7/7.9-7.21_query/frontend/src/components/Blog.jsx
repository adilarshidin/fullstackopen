import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { Button, Card } from "react-bootstrap";

import { deleteBlogRequest, updateBlogRequest } from "../utils/requests";
import { notifyThunkAction } from "../reducers/notification";

const Blog = ({ blog, userData }) => {
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
        oldBlogs.map((oldBlog) => (oldBlog.id === blog.id ? data.data : oldBlog)),
      );
    },
  });

  if (!blog || !userData) return null;

  return (
    <Card style={{ margin: "2%" }}>
      <Card.Body>
        <Card.Title>
          <Link to={`/blogs/${blog.id}`}><h4>{blog.title}</h4></Link>
        </Card.Title>
        <Button
          variant="secondary"
          style={{
            display: blog.user.id === userData.id ? "" : "none",
          }}
          onClick={() => deleteBlogMutation.mutate()}
        >
          Delete blog
        </Button>
        <Button variant="primary" onClick={() => updateBlogMutation.mutate()}>
          ❤️ Like
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Blog;
