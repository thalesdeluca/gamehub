const { default: api } = require("../../config/api")

const Types = {
  GAME_SAVE_SCORE: "GAME/SAVE_SCORE",
  GAME_SAVE_SCORE_SUCCESS: "GAME/SAVE_SCORE_SUCCESS",
  GAME_SAVE_SCORE_FAILED: "GAME/SAVE_SCORE_FAILED",

  GAME_SAVE_SCORE_TEMP: "GAME/SAVE_SCORE_TEMP"
}

const INIT_STATE = {
  score: 0,
  scoreLoading: false,
  scoreError: null,

  game: ""
}

const game = (state = INIT_STATE, action) => {
  switch (action.type) {
    case Types.GAME_SAVE_SCORE:
      return {
        ...state,
        score: action.payload.score,
        game: action.payload.game,
        scoreLoading: true,
        scoreError: null
      }

    case Types.GAME_SAVE_SCORE_SUCCESS:
      return {
        ...state,
        score: 0,
        scoreLoading: true,
        scoreError: null
      }

    case Types.GAME_SAVE_SCORE_FAILED:
      return {
        ...state,
        score: action.payload,
        scoreLoading: true,
        scoreError: null
      }

    case Types.GAME_SAVE_SCORE_TEMP:
      return {
        ...state,
        score: action.payload.score,
        game: action.payload.game
      }

    default:
      return state;
  }
}

const saveScore = (score = 0, game = "") => {
  return async (dispatch) => {
    try {
      const { data } = await api.post("/score", { score, game });
      dispatch({ type: Types.GAME_SAVE_SCORE_SUCCESS, payload: data })
    } catch (err) {
      dispatch({ type: Types.GAME_SAVE_SCORE_FAILED, payload: err })
    }
  }
}

const saveScoreTemp = (score = 0, game = "") => {
  return (dispatch) => {
    dispatch({ type: Types.GAME_SAVE_SCORE_TEMP, payload: { score, game } })
  }
}


export { saveScore, saveScoreTemp }

export default game;