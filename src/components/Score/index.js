import React from "react";
import "./styles.scss";

const Score = ({ data: { user, points } }) => {
  return (
    <div className="score-containerr">
      <span className="title">{user?.name}</span>
      <span className="text">{points}</span>
    </div>
  );
};

export default Score;
