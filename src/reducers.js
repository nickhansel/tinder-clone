import { combineReducers } from "redux";
import global from "reducers/global";
import landingSlice from "pages/Landing/reducers";
import dashboardSlice from "pages/Dashboard/reducers";
import clientDetailsSlice from "pages/ClientDetails/reducers";
import { connectRouter } from "connected-react-router";

import { browserHistory as history } from "./lib/history";

export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    router: connectRouter(history),
    global,
    landingSlice,
    dashboardSlice,
    clientDetailsSlice,
    ...injectedReducers,
  });
}
