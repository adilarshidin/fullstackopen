import { useDispatch, useSelector } from 'react-redux';

import Note from './Note';

import { toggleImportance } from '../reducers/noteReducer';
import { changeNoteImportanceRequest } from '../utils/requests';


const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector(({ notes, filter }) => {
    if (filter === 'ALL') {
      return notes;
    };

    return filter === 'IMPORTANT' ?
      notes.filter(note => note.important) :
      notes.filter(note => !note.important);
  });

  const toggleImportanceHandler = async (id) => {
    const noteToUpdate = notes.find(note => note.id === id);
    const updatedNote = await changeNoteImportanceRequest(
      {
        content: noteToUpdate.content,
        important: !noteToUpdate.important,
        id: noteToUpdate.id
      }
    );

    dispatch(toggleImportance(updatedNote));
  };

  return (
    <ul>
      {notes.map(note => (
        <Note key={note.id} note={note} onClick={() => toggleImportanceHandler(note.id)} />
      ))}
    </ul>
  );
};

export default Notes;
