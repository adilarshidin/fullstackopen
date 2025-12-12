import { useDispatch } from 'react-redux';

import { createNote } from '../reducers/noteReducer';
import { addNoteRequest } from '../utils/requests';


const NoteForm = () => {
  const dispatch = useDispatch();

  const addNoteHandler = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = '';
    const newNote = await addNoteRequest({ content: content, important: false });
    dispatch(createNote(newNote));
  };

  return (
    <form onSubmit={addNoteHandler}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  );
};

export default NoteForm;
