const Note = ({ note, onClick }) => {
  return (
    <li onClick={onClick}>
      {note.content} <strong>{note.important ? 'important' : ''}</strong>
    </li>
  );
};

export default Note;
