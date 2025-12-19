import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const BlogAdditionForm = ({ handleCreateBlog }) => {
  const [titleInput, setTitle] = useState("");
  const [authorInput, setAuthor] = useState("");
  const [urlInput, setUrl] = useState("");

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
    await handleCreateBlog({
      title: titleInput,
      author: authorInput,
      url: urlInput,
    });
  };

  return (
    <Form onSubmit={handleNewBlog}>
      <h4>Add a new blog:</h4>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title:</Form.Label>
        <Form.Control
          type="text"
          id="title"
          value={titleInput}
          onChange={handleTitleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="author">
        <Form.Label>Author:</Form.Label>
        <Form.Control
          type="text"
          id="author"
          value={authorInput}
          onChange={handleAuthorInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="author">
        <Form.Label>URL:</Form.Label>
        <Form.Control
          type="text"
          id="url"
          value={urlInput}
          onChange={handleUrlInput} />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
};

export default BlogAdditionForm;
