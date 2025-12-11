import { createSlice } from '@reduxjs/toolkit';


const initialState = { type: 'initial', content: 'Christ is King!' };

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    changeNotificationActionCreator(state, action) {
      return action.payload;
    },
    resetNotificationActionCreator(state, action) {
      return initialState;
    }
  }
});

export const {
  changeNotificationActionCreator,
  resetNotificationActionCreator
} = notificationSlice.actions;
export default notificationSlice.reducer;
