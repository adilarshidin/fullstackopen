const Content = ({ notes, setNotes, importantFilter }) => {
  const itemStyles = {
    display: "flex"
  };

  if (!notes) {
    return null;
  };

  let newNotes = notes;

  if (importantFilter) {
    newNotes = notes.filter(note => note.important ? note : '')
  };

  const toggleImportance = (note) => {
    const newNote = { ...note, important: !note.important };
    const newNotes = notes.map(note => note.id === newNote.id ? newNote : note);
    setNotes(newNotes);
  };

  return (
    <ul>
      {newNotes.map(note =>
        <div key={note.id} style={itemStyles}>
          <li>{note.content}</li>
          <button onClick={() => toggleImportance(note)}>{note.important ? 'mark non-important' : 'mark important'}</button>
        </div>
      )}
    </ul>
  )
};

export default Content;
