import auth from "./auth";
import { combineReducers } from "redux"
import game from "./game";

export default combineReducers({
  auth: auth,
  game: game
})