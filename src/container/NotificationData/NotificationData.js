import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotificationCard from "../../components/card/NotificationCard";
import { fetchNotificationData } from "../../actions/DailyReport";

const NotificationData = () => {
  const dispatch = useDispatch();
  const notificationData = useSelector(
    state => state.dailyReport.notificationData
  );
  const { notifications } = notificationData || "";

  useEffect(() => {
    dispatch(fetchNotificationData());
  }, [dispatch]);
  return (
    <div>
      <NotificationCard notifications={notifications} />
    </div>
  );
};

export default NotificationData;
