import { createSlice } from '@reduxjs/toolkit';


const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    switchFilter(state, action) {
      return action.payload;
    }
  }
});

export const { switchFilter } = filterSlice.actions;
export default filterSlice.reducer;
