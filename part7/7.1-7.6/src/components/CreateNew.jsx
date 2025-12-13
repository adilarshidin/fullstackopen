import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { useField } from '../hooks/index';
import NotificationContext from '../NotificationContext';


const CreateNew = (props) => {
  const contentField = useField('text');
  const authorField = useField('text');
  const infoField = useField('text');
  const reset = () => {
    contentField.onClick();
    authorField.onClick();
    infoField.onClick();
  };
  const useNavigateHook = useNavigate();
  const { handleNotification } = useContext(NotificationContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contentField);
    const content = contentField.inputProps.value;
    const author = authorField.inputProps.value;
    const info = infoField.inputProps.value;
    props.addNew({
      content,
      author,
      info,
      votes: 0
    });

    useNavigateHook('/anecdotes');
    handleNotification(contentField.value);
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input name='content' { ...contentField.inputProps } />
        </div>
        <div>
          author
          <input name='author' { ...authorField.inputProps } />
        </div>
        <div>
          url for more info
          <input name='info' { ...infoField.inputProps } />
        </div>
        <button>create</button>
        <button name='reset'
          type='reset'
          onClick={reset}>reset</button>
      </form>
    </div>
  );
};

export default CreateNew;
