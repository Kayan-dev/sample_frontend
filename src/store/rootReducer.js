import { combineReducers } from "redux";
import appState from "./appState/reducer";
import Plate from "./plates/reducer";
import Sample from "./samples/reducer";

export default combineReducers({
  appState,
  Plate,
  Sample,
});
