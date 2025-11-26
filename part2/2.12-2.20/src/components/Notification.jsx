const Notification = ({ message, type }) => {
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

  if (!message) {
    return null;
  };

  return (
    <div style={type === "error" ? notificationErrorStyles : notificationSuccessStyles}>
      {message}
    </div>
  )
};

export default Notification;
