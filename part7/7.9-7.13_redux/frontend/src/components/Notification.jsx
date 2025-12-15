import { useSelector } from "react-redux";

const Notification = () => {
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

  const notification = useSelector((state) => state.notification);

  if (!notification) return null;

  if (notification.type === "SUCCESS") {
    return <p style={successStyles}>{notification.message}</p>;
  } else if (notification.type === "ERROR") {
    return <p style={errorStyles}>{notification.message}</p>;
  }
};

export default Notification;
