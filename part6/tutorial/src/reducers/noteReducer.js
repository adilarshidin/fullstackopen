const noteReducer = (state = [], action) => {
  switch (action.type) {
  case 'NEW_NOTE':
    return [...state, action.payload];
  case 'TOGGLE_IMPORTANCE': {
    const id = action.payload.id;
    const noteToChange = state.find(note => note.id === id);
    const updatedNote = { ...noteToChange, important: !noteToChange.important };
    const newNotes = state.map(note => note.id === id ? updatedNote : note);
    return newNotes;
  }
  default:
    return state;
  };
};

export default noteReducer;
