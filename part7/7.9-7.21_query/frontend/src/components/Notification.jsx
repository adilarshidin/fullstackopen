import { useSelector } from "react-redux";
import { Alert } from "react-bootstrap";

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  if (!notification) return null;
  console.log(`Notification in component: ${JSON.stringify(notification)}`);
  if (notification.type === "success") {
    return <Alert variant="success">{notification.message}</Alert>;
  } else if (notification.type === "error") {
    return <Alert variant="danger">{notification.message}</Alert>;
  } else {
    return null;
  }
};

export default Notification;
