import { useDispatch } from 'react-redux';

import { createNoteActionCreator } from '../reducers/noteReducer';


const NoteForm = () => {
  const dispatch = useDispatch();

  const addNoteHandler = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = '';
    dispatch(createNoteActionCreator({ content: content, important: false }));
  };

  return (
    <form onSubmit={addNoteHandler}>
      <input name="note" />
      <button type="submit">add</button>
    </form>
  );
};

export default NoteForm;
