import { useState } from 'react';


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
