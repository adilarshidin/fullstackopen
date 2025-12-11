import { useDispatch, useSelector } from 'react-redux';

import Note from './Note';

import { toggleImportance } from '../utils/reducerActions';


const Notes = () => {
  const dispatch = useDispatch();
  const notes = useSelector(state => state);

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
