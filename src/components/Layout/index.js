import React, { useState, useEffect } from "react";
import "./styles.scss";
import ChatDrawer from "../ChatDrawer";
import { Button } from "../Button";
import MenuSVGBlack from "../../assets/images/menu_black.svg";
import MenuSVG from "../../assets/images/menu.svg";
import LeaderboardsDrawer from "../LeaderboardsDrawer";
import { useDispatch, useSelector } from "react-redux";
import { loginRefresh } from "../../store/ducks/auth";
import { getScore } from "../../store/ducks/game";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { leaderboards, scoreLoading } = useSelector((state) => state.game);
  const [open, setOpen] = useState(false);
  const [openLeaderboards, setOpenLeaderboards] = useState(false);

  useEffect(() => {
    dispatch(loginRefresh());
    dispatch(getScore());
    console.log("refresh");
  }, []);

  useEffect(() => {
    if (scoreLoading) {
      setOpen(false);
      setOpenLeaderboards(true);
    }
  }, [scoreLoading]);

  console.log(scoreLoading);
  return (
    <div className="layout-container">
      <Button
        className="button-layout"
        onClick={() => {
          setOpen(!open);
          setOpenLeaderboards(false);
        }}
      >
        <img src={open ? MenuSVGBlack : MenuSVG} className="menu-layout" />
      </Button>
      <ChatDrawer open={open} />
      <div
        className={`content-container ${(open || openLeaderboards) && "pad"}`}
      >
        {children}
      </div>

      <Button
        className="btn-outline-primary button-layout-leader"
        onClick={() => {
          setOpen(false);
          setOpenLeaderboards(!openLeaderboards);
        }}
      >
        Rank
      </Button>
      <LeaderboardsDrawer open={openLeaderboards} />
    </div>
  );
};

export default Layout;
