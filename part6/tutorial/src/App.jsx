import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import NoteForm from './components/NoteForm';
import Notes from './components/Notes';
import VisibilityFilter from './components/VisibilityFilter';

import { initializeNotesActionCreator } from './reducers/noteReducer';


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeNotesActionCreator());
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
