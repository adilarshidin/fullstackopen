import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';

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
    handleNotification(contentField.inputProps.value);
  };

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField label="content" name="content" type="text" { ...contentField.inputProps } />
        </div>
        <div>
          <TextField label="author" name="author" type="text" { ...authorField.inputProps } />
        </div>
        <div>
          <TextField label="url for more info" name="info" type="url" { ...infoField.inputProps } />
        </div>
        <Button variant="contained" color="primary" type="submit">
          create
        </Button>
        <Button variant="contained" color="secondary" name="reset" type="reset" onClick={reset}>
          reset
        </Button>
      </form>
    </div>
  );
};

export default CreateNew;
