import { useState } from 'react';


const BlogAdditionForm = ({ handleCreateBlog }) => {
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
    await handleCreateBlog({ title: titleInput, author: authorInput, url: urlInput });
  };

  return (
    <form onSubmit={handleNewBlog}>
      <h4>Add a new blog:</h4>
      <p>
        <label htmlFor='title'>Title:</label>
        <input id='title' value={titleInput} onChange={handleTitleInput} />
      </p>
      <p>
        <label htmlFor='author'>Author:</label>
        <input id='author' value={authorInput} onChange={handleAuthorInput} />
      </p>
      <p>
        <label htmlFor='url'>URL:</label>
        <input id='url' value={urlInput} onChange={handleUrlInput} />
      </p>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default BlogAdditionForm;
