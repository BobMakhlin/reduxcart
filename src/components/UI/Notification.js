import { useEffect } from "react";
import classes from "./Notification.module.css";

const Notification = ({
  id,
  title,
  message,
  status,
  autoCloseDuration = 3000,
  onClose,
}) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
      onClose(id);
    }, autoCloseDuration);
    return () => {
      clearTimeout(timerId);
    };
  }, [id, onClose, autoCloseDuration]);

  let specialClasses = "";
  if (status === "error") {
    specialClasses = classes.error;
  }
  if (status === "success") {
    specialClasses = classes.success;
  }
  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
};

export default Notification;
