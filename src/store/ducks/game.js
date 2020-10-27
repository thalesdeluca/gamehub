const { default: api } = require("../../config/api");

const Types = {
  GAME_SAVE_SCORE: "GAME/SAVE_SCORE",
  GAME_SAVE_SCORE_SUCCESS: "GAME/SAVE_SCORE_SUCCESS",
  GAME_SAVE_SCORE_FAILED: "GAME/SAVE_SCORE_FAILED",

  GAME_GET_SCORE: "GAME/GET_SCORE",
  GAME_GET_SCORE_SUCCESS: "GAME/GET_SCORE_SUCCESS",
  GAME_GET_SCORE_FAILED: "GAME/GET_SCORE_FAILED",

  GAME_SAVE_SCORE_TEMP: "GAME/SAVE_SCORE_TEMP",
};

const INIT_STATE = {
  score: 0,
  scoreLoading: false,
  scoreError: null,
  leaderboards: [],
  leaderboardsLoading: false,
  game: "",
};

const game = (state = INIT_STATE, action) => {
  switch (action.type) {
    case Types.GAME_SAVE_SCORE:
      return {
        ...state,
        scoreLoading: true,
        scoreError: null,
      };

    case Types.GAME_SAVE_SCORE_SUCCESS:
      return {
        ...state,
        leaderboards: action.payload,
        game: "",
        score: 0,
        scoreLoading: false,
        scoreError: null,
      };

    case Types.GAME_SAVE_SCORE_FAILED:
      return {
        ...state,
        game: "",
        score: action.payload,
        scoreLoading: false,
        scoreError: null,
      };

    case Types.GAME_GET_SCORE:
      return {
        ...state,
        leaderboards: [],
        leaderboardsLoading: true,
      };

    case Types.GAME_GET_SCORE_SUCCESS:
      return {
        ...state,
        leaderboards: action.payload,
        leaderboardsLoading: false,
      };

    case Types.GAME_SAVE_SCORE_TEMP:
      return {
        ...state,
        score: action.payload.score,
        game: action.payload.game,
      };

    default:
      return state;
  }
};

const saveScore = (points = 0, game = "") => {
  return async (dispatch) => {
    try {
      dispatch({ type: Types.GAME_SAVE_SCORE });
      const { data } = await api.post("/score", { points, game });
      dispatch({ type: Types.GAME_SAVE_SCORE_SUCCESS, payload: data });
    } catch (err) {
      console.log("aaaaaaa", err);
      dispatch({ type: Types.GAME_SAVE_SCORE_FAILED, payload: err });
    }
  };
};

const saveScoreTemp = (score = 0, game = "") => {
  return (dispatch) => {
    dispatch({ type: Types.GAME_SAVE_SCORE_TEMP, payload: { score, game } });
  };
};

const getScore = (game = "jokenpo") => {
  return async (dispatch) => {
    try {
      dispatch({ type: Types.GAME_GET_SCORE });
      const { data } = await api.get("/score/jokenpo");
      dispatch({ type: Types.GAME_GET_SCORE_SUCCESS, payload: data });
    } catch (err) {
      console.log(err);
    }
  };
};

export { saveScore, saveScoreTemp, getScore };

export default game;
