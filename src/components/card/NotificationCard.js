import React, { createRef } from "react";
import { NonDigit } from "../helpers/NonDigit";

const NotificationCard = ({ notifications }) => {
  return (
    <>
      <h2 className="head2">Notification & Advisories</h2>
      <div className="card-container">
        {notifications &&
          notifications.map((data, index) => {
            const anchor = createRef();
            const title = NonDigit(data.title);
            return (
              <div
                className="card"
                style={{ textAlign: "center", cursor: "pointer" }}
                key={index}
                onClick={() => anchor.current.click()}
              >
                <a
                  ref={anchor}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.link}
                >
                  {title}
                </a>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default NotificationCard;
