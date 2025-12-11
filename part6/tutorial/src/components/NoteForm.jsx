import { useDispatch } from 'react-redux';

import { createNote } from '../utils/reducerActions';


const NoteForm = () => {
  const dispatch = useDispatch();

  const addNoteHandler = (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = '';
    dispatch(createNote(content));
  };

  return (
    <form onSubmit={addNoteHandler}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  );
};

export default NoteForm;
