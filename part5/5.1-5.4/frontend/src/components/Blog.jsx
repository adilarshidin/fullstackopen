import { deleteBlogRequest } from "../utils/requests";


const Blog = ({ blog, blogs, setBlogs, userToken, setNotificationObject }) => {
  if (!blog) return null;

  const handleBlogDeletion = async () => {
    const blogDeletionResult = await deleteBlogRequest(blog.id, userToken)
    if (!blogDeletionResult.result) {
      setNotificationObject({ message: blogDeletionResult.message, type: "error" });
      setTimeout(() => setNotificationObject({
        message: "", type: ""
      }), 5000);
    } else {
      const newBlogs = blogs.filter(currentBlog => currentBlog.id === blog.id ? '' : currentBlog);
      setBlogs(newBlogs);
      setNotificationObject({ message: blogDeletionResult.message, type: "success" });
      setTimeout(() => setNotificationObject({
        message: "", type: ""
      }), 5000);
    };
  };

  return (
    <div>
      <h4>{blog.title}</h4>
      <span>
        Author: {blog.author}
        Likes: {blog.likes}
        <a href={blog.url}>link</a>
      </span>
      <p>Written by {blog.user.name}</p>
      <button onClick={handleBlogDeletion}>Delete blog</button>
      <hr />
    </div>
  )
};

export default Blog;
