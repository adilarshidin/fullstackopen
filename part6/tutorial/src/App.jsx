import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import NoteForm from './components/NoteForm';
import Notes from './components/Notes';
import VisibilityFilter from './components/VisibilityFilter';

import { setNotes } from './reducers/noteReducer';
import { getNotesRequest } from './utils/requests';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getNotes = async () => {
      const notes = await getNotesRequest();
      dispatch(setNotes(notes));
    };
    getNotes();
  }, [dispatch]);

  return (
    <div>
      <VisibilityFilter />
      <NoteForm />
      <Notes />
    </div>
  );
};

export default App;
