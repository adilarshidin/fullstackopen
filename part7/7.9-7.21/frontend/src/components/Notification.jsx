const Notification = ({ message, type }) => {
  const successStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "12px 20px",
    backgroundColor: "#d1fae5",
    color: "#065f46",
    borderBottom: "2px solid #10b981",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "500",
    zIndex: 9999,
  };
  const errorStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    padding: "12px 20px",
    backgroundColor: "#fee2e2",
    color: "#991b1b",
    borderBottom: "2px solid #ef4444",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "500",
    zIndex: 9999,
  };

  if (type === "success") {
    return <p style={successStyles}>{message}</p>;
  } else if (type === "error") {
    return <p style={errorStyles}>{message}</p>;
  } else {
    return null;
  }
};

export default Notification;
