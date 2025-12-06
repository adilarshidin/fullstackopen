import { deleteBlogRequest } from "../utils/requests";


const Blog = ({ blog, blogs, setBlogs, userToken }) => {
  if (!blog) return null;

  const handleBlogDeletion = async () => {
    const blogDeletionResult = await deleteBlogRequest(blog.id, userToken)
    if (!blogDeletionResult.result) {
      alert(blogDeletionResult.message);
    } else {
      const newBlogs = blogs.filter(currentBlog => currentBlog.id === blog.id ? '' : currentBlog);
      setBlogs(newBlogs);
      alert(blogDeletionResult.message);
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
