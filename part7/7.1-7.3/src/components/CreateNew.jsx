import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import NotificationContext from '../NotificationContext';


const CreateNew = (props) => {
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [info, setInfo] = useState('');
  const useNavigateHook = useNavigate();
  const { handleNotification } = useContext(NotificationContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNew({
      content,
      author,
      info,
      votes: 0
    });

    useNavigateHook('/anecdotes');
    handleNotification(content);
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input name='content' value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <div>
          author
          <input name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div>
          url for more info
          <input name='info' value={info} onChange={(e) => setInfo(e.target.value)} />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default CreateNew;
