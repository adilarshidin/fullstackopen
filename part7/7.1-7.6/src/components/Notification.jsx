import { useContext } from 'react';
import { Alert } from '@mui/material';

import NotificationContext from '../NotificationContext';


const Notification = () => {
  const { notification } = useContext(NotificationContext);

  if (!notification) return null;

  return (
    <div className="container">
      <Alert variant="success">{notification}</Alert>
    </div>
  );
};

export default Notification;
