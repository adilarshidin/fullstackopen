import { useState } from 'react'

import Content from './components/Content';
import AdditionForm from './components/AdditionForm';


const App = () => {
  const notesStyles = {
    color: "darkgreen",
    fontStyle: "italic"
  };

  const [notes, setNotes] = useState([
    {
      id: 1,
      content: "The fear of the Lord is the beginning of knowledge, but fools despise wisdom and instruction.",
      important: false
    },
    {
      id: 2,
      content: "Listen, my son, to your father's instruction and do not forsake your mother's teaching. They are a garland to grace your head and a chain to adorn your neck.",
      important: true
    },
    {
      id: 3,
      content: "My son, if sinful men entice you, do not give in to them.",
      important: true
    }
  ]);
  const [importantFilter, setImportantFilter] = useState(false);

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
