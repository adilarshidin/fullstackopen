import { useState, useEffect } from 'react';

import Content from "./components/Content";
import NoteAdditionForm from './components/NoteAdditionForm';

import { getNotesRequest } from './utils/requests';


const App = () => {
  const [notes, setNotes] = useState([]);
  const [importantFilter, setImportantFilter] = useState(false);
  const headerStyles = {
    color: "darkGreen",
    fontStyle: "italic"
  };

  const getNotes = () => {
    getNotesRequest()
      .then(data => setNotes(data))
  };
  useEffect(getNotes, []);

  const handleImportantFilter = () => setImportantFilter(!importantFilter);

  return (
    <main>
      <h2 style={headerStyles}>Notes</h2>
      <button onClick={handleImportantFilter}>{importantFilter ? 'show all notes' : 'show only important notes'}</button>
      <Content notes={notes} importantFilter={importantFilter} setNotes={setNotes} />
      <NoteAdditionForm notes={notes} setNotes={setNotes} />
    </main>
  ) 
};

export default App;
