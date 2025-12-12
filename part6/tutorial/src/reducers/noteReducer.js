import { createSlice } from '@reduxjs/toolkit';


const noteSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    createNote(state, action) {
      return state.concat(action.payload);
    },
    toggleImportance(state, action) {
      return state.map(note => note.id === action.payload.id ? action.payload : note);
    },
    setNotes(state, action) {
      return action.payload;
    }
  }
});

export const { createNote, toggleImportance, setNotes } = noteSlice.actions;
export default noteSlice.reducer;
