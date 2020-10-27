import React, { useState } from "react";
import triangleImg from "../../assets/images/bg-triangle.svg";
import iconPaperImg from "../../assets/images/icon-paper.svg";
import iconScissorsImg from "../../assets/images/icon-scissors.svg";
import iconRockImg from "../../assets/images/icon-rock.svg";
import "./styles.scss";
import { Button, Header, JokenpoButton, Spinner } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { CSSTransitionGroup } from "react-transition-group";
import { useHistory, Link } from "react-router-dom";
import { saveScore, saveScoreTemp } from "../../store/ducks/game";
import { games } from "../../constants";

const options = ["rock", "paper", "scissors"];

const conditions = {
  paper_rock: true,
  paper_scissors: false,
  paper_paper: null,
  scissors_paper: true,
  scissors_rock: false,
  scissors_scissors: null,
  rock_paper: false,
  rock_scissors: true,
  rock_rock: null,
};

function JokenpoPage() {
  const { user } = useSelector((state) => state.auth);
  const { scoreLoading } = useSelector((state) => state.game);
  const [score, setScore] = useState(0);
  const [played, setPlayed] = useState(false);
  const [choice, setChoice] = useState(null);
  const [cpuChoice, setCpuChoice] = useState(null);
  const [win, setWin] = useState(undefined);

  const history = useHistory();
  const dispatch = useDispatch();

  const onClick = (option = "") => {
    if (!played) {
      const cpu = options[Math.floor(Math.random() * 3)];
      const checkWin = conditions[`${option}_${cpu}`];
      setWin(checkWin);
      setCpuChoice(cpu);
      setChoice(option);
      setPlayed(true);

      if (checkWin) {
        setScore(score + 1);
      }
    }
  };

  const renderChoice = (choice) => {
    const classes = [
      { icon: iconRockImg, name: "red" },
      { icon: iconPaperImg, name: "blue" },
      { icon: iconScissorsImg, name: "yellow" },
    ];

    const choiceIndex = options.findIndex((name) => name === choice);

    return (
      <JokenpoButton
        icon={classes[choiceIndex]?.icon}
        className={`action-btn ${classes[choiceIndex]?.name} result`}
      />
    );
  };

  const renderResult = () => {
    return (
      played && (
        <div id="results" className="results-container">
          <div className="picked" id="picked">
            <span className="result-title">YOU PICKED</span>
            {renderChoice(choice)}
          </div>

          <div className="cpu" id="cpu">
            <span className="result-title">THE HOUSE PICKED</span>
            {renderChoice(cpuChoice)}
          </div>
        </div>
      )
    );
  };

  const renderResultTitle = () => {
    switch (win) {
      case true:
        return "YOU WIN";
      case false:
        return "YOU LOST";
      case null:
        return "TIE";

      default:
        return "";
    }
  };

  const onClickAgain = () => {
    setPlayed(false);
    setChoice(null);
    setCpuChoice(null);
    setWin(undefined);
  };

  const onClickSave = () => {
    if (user) {
      console.log("dispatch");
      return dispatch(saveScore(score, "jokenpo"));
    }

    dispatch(saveScoreTemp(score, "jokenpo"));
    history.push("/login");
  };

  const renderButtons = () => (
    <>
      {scoreLoading ? (
        <Spinner />
      ) : (
        <button
          type="button"
          className="btn btn-info btn-lg rules scorebtn"
          onClick={onClickSave}
        >
          SAVE SCORE
        </button>
      )}
      <button
        type="button"
        id="again"
        className="btn btn-info btn-lg rules again"
        onClick={onClickAgain}
      >
        PLAY AGAIN
      </button>
      <span id="results-title">{renderResultTitle()}</span>
    </>
  );

  return (
    <div className="jokenpo-container">
      <Link to="/" style={{ textDecoration: "none" }}>
        <span className="title-site">Games</span>
      </Link>

      <div className="container">
        <Header score={score} titles={["ROCK", "PAPER", "SCISSORS"]} />

        <CSSTransitionGroup
          transitionName="fade"
          transitionLeave={false}
          transitionEnterTimeout={400}
          transitionLeaveTimeout={200}
        >
          {!played ? (
            <div id="buttons" className="buttons-container" key="button">
              <img src={triangleImg} className="center-triangle" />
              <div className="top-buttons">
                <JokenpoButton
                  onClick={() => onClick("paper")}
                  id="paper"
                  icon={iconPaperImg}
                  className="action-btn blue"
                />
                <JokenpoButton
                  onClick={() => onClick("scissors")}
                  id="scissors"
                  icon={iconScissorsImg}
                  className="action-btn yellow"
                />
              </div>
              <JokenpoButton
                onClick={() => onClick("rock")}
                id="rock"
                icon={iconRockImg}
                className="action-btn red"
              />
            </div>
          ) : (
            <>
              {renderResult()}
              {renderButtons()}
            </>
          )}
        </CSSTransitionGroup>
      </div>
    </div>
  );
}

export default JokenpoPage;
