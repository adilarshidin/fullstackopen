import { createSlice } from "@reduxjs/toolkit";


let timeoutID = null;

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    notify(state, action) {
      return { type: action.payload.type, message: action.payload.message };
    },
    clear() {
      return null;
    }
  }
});

export const { notify, clear } = notificationSlice.actions;

const notifyThunkAction = ({ type, message }) => {
  return async (dispatch) => {
    dispatch(notify({ type: type, message: message }));
  };
};

const clearThunkAction = ({ timeout = 5000 }) => {
  return async (dispatch) => {
    if (timeoutID) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => dispatch(clear()), timeout);
  };
};

export { notifyThunkAction, clearThunkAction };
export default notificationSlice.reducer;
