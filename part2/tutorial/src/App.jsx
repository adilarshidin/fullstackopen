import { useState, useEffect } from 'react'

import Content from './components/Content';
import AdditionForm from './components/AdditionForm';

import { getNotesRequest } from './utils/requests';


const App = () => {
  const notesStyles = {
    color: "darkgreen",
    fontStyle: "italic"
  };

  const [notes, setNotes] = useState(null);
  const [importantFilter, setImportantFilter] = useState(false);

  const getNotes = () => {
    getNotesRequest()
      .then(data => setNotes(data));
  };
  useEffect(getNotes, []);

  const toggleImportantFilter = () => setImportantFilter(!importantFilter);

  return (
    <div>
      <h2 style={notesStyles}>Notes</h2>
      <button onClick={toggleImportantFilter}>{importantFilter ? 'show all notes' : 'show only important notes'}</button>
      <Content notes={notes} setNotes={setNotes} importantFilter={importantFilter} />
      <AdditionForm notes={notes} setNotes={setNotes} />
    </div>
  )
};

export default App;
