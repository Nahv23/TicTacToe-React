import { combineReducers } from "redux";
import GameReducer from "./Reducers/Game";

export default combineReducers({
  infoGame: GameReducer,
});
