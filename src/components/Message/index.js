import React from "react";
import "./styles.scss";

const Message = ({ you = false, data: { text, created_at, user } }) => {
  return !you ? (
    <div className="message-container">
      <span className="title">{user?.name}</span>
      <span className="text">{text}</span>
    </div>
  ) : (
    <div className="message-container you">
      <span className="title you">{user?.name}</span>
      <span className="text you">{text}</span>
    </div>
  );
};

export default Message;
