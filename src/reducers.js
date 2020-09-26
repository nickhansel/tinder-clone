import { combineReducers } from "redux";
import global from "reducers/global";
import { landingSlice } from "pages/Langing";

console.log("landingSlice");

console.log(landingSlice);

export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    global,
    landingSlice,
    ...injectedReducers,
  });
}
