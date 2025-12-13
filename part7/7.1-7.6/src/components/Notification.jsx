import { useContext } from 'react';

import NotificationContext from '../NotificationContext';


const Notification = () => {
  const notificationStyles = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  };

  const { notification } = useContext(NotificationContext);

  if (!notification) return null;

  return (
    <div style={notificationStyles}>
      <p>{notification}</p>
    </div>
  );
};

export default Notification;
