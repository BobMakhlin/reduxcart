import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import Notification from "../UI/Notification";

const Notifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((store) => store.ui.notifications);

  const handleNotificationClose = useCallback(
    (id) => {
      dispatch(uiActions.hideNotification({ id }));
    },
    [dispatch]
  );

  return notifications.map((item) => (
    <Notification
      key={item.id}
      id={item.id}
      title={item.title}
      message={item.message}
      status={item.status}
      autoCloseDuration={1000}
      onClose={handleNotificationClose}
    />
  ));
};

export default Notifications;
