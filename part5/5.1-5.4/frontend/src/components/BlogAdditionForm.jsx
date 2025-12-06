import { useState } from "react";

import { addBlogRequest } from "../utils/requests";


const BlogAdditionForm = ({ blogs, setBlogs, userData }) => {
  const [titleInput, setTitle] = useState('');
  const [authorInput, setAuthor] = useState('');
  const [urlInput, setUrl] = useState('');

  const handleTitleInput = ({ target }) => {
    const newTitle = target.value;
    setTitle(newTitle);
  };

  const handleAuthorInput = ({ target }) => {
    const newAuthor = target.value;
    setAuthor(newAuthor);
  };

  const handleUrlInput = ({ target }) => {
    const newUrl = target.value;
    setUrl(newUrl);
  };

  const handleNewBlog = async (event) => {
    event.preventDefault();
    const addBlogResult = await addBlogRequest(
      titleInput, authorInput, urlInput, userData.id, userData.token);
    if (!addBlogResult.result) {
      alert(addBlogResult.message);
    } else {
      const newBlogs = blogs.concat({
        id: addBlogResult.data.id,
        author: authorInput,
        title: titleInput,
        likes: addBlogResult.data.likes,
        url: urlInput,
        user: {
          name: userData.name
        }
      });
      setBlogs(newBlogs);
      alert(addBlogResult.message);
    };
  };

  return (
    <form onSubmit={handleNewBlog}>
      <h4>Add a new blog:</h4>
      <p>
        <label for="title">Title:</label>
        <input id="title" value={titleInput} onChange={handleTitleInput} />
      </p>
      <p>
        <label for="author">Author:</label>
        <input id="author" value={authorInput} onChange={handleAuthorInput} />
      </p>
      <p>
        <label for="url">URL:</label>
        <input id="url" value={urlInput} onChange={handleUrlInput} />
      </p>
      <button type="submit">Submit</button>
    </form>
  )
};

export default BlogAdditionForm;
