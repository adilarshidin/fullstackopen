const Notification = ({ notificationMessage }) => {
  const notificationErrorStyles = {
    color: 'red',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  };
  const notificationSuccessStyles = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
  }

  if (!notificationMessage.message) {
    return null;
  };

  return (
    <div style={
      notificationMessage.type === "error"
       ? notificationErrorStyles : notificationSuccessStyles}>
      {notificationMessage.message}
    </div>
  )
};

export default Notification;
