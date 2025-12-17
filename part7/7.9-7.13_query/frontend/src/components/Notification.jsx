import { useSelector } from "react-redux";

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

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  if (!notification) return null;
  console.log(`Notification in component: ${JSON.stringify(notification)}`);
  if (notification.type === "success") {
    return <p style={successStyles}>{notification.message}</p>;
  } else if (notification.type === "error") {
    return <p style={errorStyles}>{notification.message}</p>;
  } else {
    return null;
  }
};

export default Notification;
