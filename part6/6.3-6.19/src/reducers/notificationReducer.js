import { createSlice } from '@reduxjs/toolkit';


const initialState = { message: 'Christ is King!', timeout: 10000 };
let timeoutId = null;

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      return action.payload;
    }
  }
});

export const { setNotification } = notificationSlice.actions;

const setNotificationActionCreator = (notificationObject) => {
  return async (dispatch) => {
    dispatch(setNotification(notificationObject));

    if (timeoutId) {
      clearTimeout(timeoutId);
    };

    timeoutId = setTimeout(() => {
      dispatch(setNotification({ message: '', timeout: null }));
      timeoutId = null;
    }, notificationObject.timeout);
  };
};

export { setNotificationActionCreator };
export default notificationSlice.reducer;
