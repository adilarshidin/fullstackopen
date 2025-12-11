import { createSlice } from '@reduxjs/toolkit';


const initialState = [
  {
    content: 'reducer defines how redux store works',
    important: true,
    id: 1,
  },
  {
    content: 'state of store can contain any data',
    important: false,
    id: 2,
  },
];

const generateId = () => Number((Math.random() * 1000000).toFixed(0));

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    createNote(state, action) {
      return state.concat({ content: action.payload, id: generateId(), important: false });
    },
    toggleImportance(state, action) {
      const id = action.payload;
      const noteToChange = state.find(note => note.id === id);
      const updatedNote = { ...noteToChange, important: !noteToChange.important };
      return state.map(note => note.id === id ? updatedNote : note);
    }
  }
});

export const { createNote, toggleImportance } = noteSlice.actions;
export default noteSlice.reducer;
