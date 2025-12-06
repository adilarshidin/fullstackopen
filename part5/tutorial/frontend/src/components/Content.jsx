import Note from './Note'


const Content = ({ notes, importantFilter, setNotes }) => {
  if (!notes) {
    return null;
  };

  if (importantFilter) {
    const importantNotes = notes.filter(note => 
      note.important ? note : ''
    );

    return (
      <ul>
        {importantNotes.map(note =>
          <Note notes={notes} noteCurrent={note} setNotes={setNotes} />
        )}
      </ul>
    )
  } else {
    return (
      <ul>
        {notes.map(note =>
          <Note notes={notes} noteCurrent={note} setNotes={setNotes} />
        )}
      </ul>
    )
  };
};

export default Content;
