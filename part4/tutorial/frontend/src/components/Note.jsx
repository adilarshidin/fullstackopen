import { updateNoteRequest, deleteNoteRequest } from "../utils/requests";


const Note = ({ notes, noteCurrent, setNotes }) => {
  if (!notes || !noteCurrent) {
    return null;
  };

  const toggleImportance = () => {
    const newNote = { ...noteCurrent, important: !noteCurrent.important };

    updateNoteRequest(newNote)
      .then(data => {
        const newNotes = notes.map(note =>
          note._id === data.data._id ? newNote : note
        );
        setNotes(newNotes);
      })
  };

  const deleteNote = () => {
    deleteNoteRequest(noteCurrent.id)
      .then(data => {
        const newNotes = notes.map(note =>
          note.id === data.id ? '' : note
        );
        setNotes(newNotes);
      })
  };

  return (
    <li key={noteCurrent.id}>
      {noteCurrent.content}
      <button onClick={toggleImportance}>{noteCurrent.important ? 'mark as non-important' : 'mark as important'}</button>
      <button onClick={deleteNote}>Delete note</button>
    </li>
  )
};

export default Note;
