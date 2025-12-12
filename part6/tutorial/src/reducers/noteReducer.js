import { createSlice } from '@reduxjs/toolkit';
import { getNotesRequest, addNoteRequest } from '../utils/requests';


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

export const { setNotes, createNote } = noteSlice.actions;

const initializeNotesActionCreator = () => {
  return async (dispatch) => {
    const notes = await getNotesRequest();
    dispatch(setNotes(notes));
  };
};

const createNoteActionCreator = (note) => {
  return async (dispatch) => {
    const newNote = await addNoteRequest(note);
    dispatch(createNote(newNote));
  };
};

export const { toggleImportance } = noteSlice.actions;
export { initializeNotesActionCreator, createNoteActionCreator };
export default noteSlice.reducer;
