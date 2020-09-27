import { combineReducers } from "redux";
import global from "reducers/global";
import { landingSlice } from "pages/Langing";
import { dashboardSlice } from "pages/Dashboard";

console.log("landingSlice 11");

console.log(landingSlice);

console.log("dashboardSlice");
console.log(dashboardSlice);

export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    global,
    landingSlice,
    dashboardSlice,
    ...injectedReducers,
  });
}
