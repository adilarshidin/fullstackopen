const Notification = ({ notification }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 10
  };

  let notificationPrefix = '';
  switch (notification.type) {
  case 'create':
    notificationPrefix = 'Created a note:';
    break;
  case 'upvote':
    notificationPrefix = 'Upvoted a note:';
    break;
  case 'initial':
    notificationPrefix = '';
  };

  return <div style={style}>{notificationPrefix} {notification.content}</div>;
};

export default Notification;
