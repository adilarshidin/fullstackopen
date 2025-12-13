import { useReducer, createContext, useRef } from 'react';


const notificationReducer = (state, action) => {
  switch(action.type) {
  case 'CREATE':
    return `Created a new anecdote: ${action.payload}`;
  case 'CLEAR':
    return null;
  default:
    return state;
  }
};
const NotificationContext = createContext();

const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(notificationReducer, null);
  const timeoutID = useRef(null);

  const handleNotification = (content) => {
    if (timeoutID.current) clearTimeout(timeoutID.current);
    notificationDispatch({ type: 'CREATE', payload: content });
    timeoutID.current = setTimeout(() => {
      notificationDispatch({ type: 'CLEAR' });
    }, 5000);
  };

  return (
    <NotificationContext.Provider value={{ notification, handleNotification }}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export { NotificationContextProvider };
export default NotificationContext;
