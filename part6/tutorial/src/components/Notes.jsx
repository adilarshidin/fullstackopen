import { useDispatch, useSelector } from 'react-redux';

import Note from './Note';

import { toggleImportance } from '../reducers/noteReducer';


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

  const toggleImportanceHandler = (id) => dispatch(toggleImportance(id));

  return (
    <ul>
      {notes.map(note => (
        <Note key={note.id} note={note} onClick={() => toggleImportanceHandler(note.id)} />
      ))}
    </ul>
  );
};

export default Notes;
