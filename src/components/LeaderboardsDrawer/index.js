import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChat, sendMessage } from "../../store/ducks/chat";
import Input from "../Input";
import Message from "../Message";
import { Spinner } from "../Spinner";
import "./styles.scss";
import Score from "../Score";

const LeaderboardsDrawer = ({ open }) => {
  const { leaderboards, leaderboardsLoading } = useSelector(
    (state) => state.game
  );

  return (
    <div className={`leaderboards-container ${open && "on"}`}>
      {leaderboardsLoading && !leaderboards?.length && (
        <div className="loading-chat">
          <Spinner dark />
        </div>
      )}

      <div className="drawer-content">
        {leaderboards
          ?.filter((item) => item?.points)
          ?.reverse()
          ?.map((data) => (
            <Score key={data?._id} data={data} />
          ))}
      </div>
    </div>
  );
};

export default LeaderboardsDrawer;
