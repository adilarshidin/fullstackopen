import { useState } from 'react';

import { addNoteRequest } from '../utils/requests';


const AdditionForm = ({ notes, setNotes }) => {
  const [noteInput, setNoteInput] = useState('');

  const handleNoteInput = (event) => {
    const newNote = event.target.value;
    setNoteInput(newNote);
  };

  const handleNoteAddition = (event) => {
    event.preventDefault();

    const newNote = {
      id: notes.length + 1,
      important: Math.random() > 0.5,
      content: noteInput
    };
    
    const addNote = addNoteRequest(newNote);
    if (!addNote) {
      alert("Could not add a new note.")
    };

    setNotes(notes.concat(newNote));
    setNoteInput('');
  };

  return (
    <form>
      <input value={noteInput} onChange={handleNoteInput} />
      <button type="submit" onClick={handleNoteAddition}>Submit</button>
    </form>
  )
};

export default AdditionForm;
