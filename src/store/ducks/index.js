import auth from "./auth";
import { combineReducers } from "redux"
import game from "./game";
import chat from "./chat";

export default combineReducers({
  auth: auth,
  game: game,
  chat: chat
})