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
    },
  },
});

export const { notify, clear } = notificationSlice.actions;

const notifyThunkAction = ({ type, message, timeout = 5000 }) => {
  return async (dispatch) => {
    dispatch(notify({ type: type, message: message }));
    if (timeoutID) clearTimeout(timeoutID);
    timeoutID = setTimeout(() => dispatch(clear()), timeout);
  };
};

export { notifyThunkAction };
export default notificationSlice.reducer;
