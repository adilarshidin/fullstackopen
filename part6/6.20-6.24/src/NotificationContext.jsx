import { useReducer, createContext } from 'react';


const notificationsReducer = (state, action) => {
  switch(action.type) {
  case 'CREATE':
    return `Created a new anecdote: ${action.payload}`;
  case 'VOTE':
    return `Voted for an anecdote: ${action.payload}`;
  case 'RESET':
    return null;
  };
};
const NotificationContext = createContext();

const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(notificationsReducer, '');

  return (
    <NotificationContext.Provider value={{ notification, notificationDispatch }}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export { NotificationContextProvider };
export default NotificationContext;
