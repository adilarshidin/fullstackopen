import { useState } from 'react';

import { addNoteRequest } from '../utils/requests';


const NoteAdditionForm = ({ userToken, notes, setNotes }) => {
  const [noteInput, setNoteInput] = useState('');

  const handleNoteInput = (event) => {
    const newNoteInput = event.target.value;
    setNoteInput(newNoteInput);
  };

  const handleNoteSubmit = (event) => {
    event.preventDefault();

    addNoteRequest(noteInput, userToken)
      .then(data => {
        setNotes(notes.concat(data.data))
      })

    setNoteInput('');
  };

  return (
    <form>
      <input value={noteInput} onChange={handleNoteInput} />
      <button type="submit" onClick={handleNoteSubmit}>Save</button>
    </form>
  )
};

export default NoteAdditionForm;
