import { combineReducers } from "redux";
import global from "reducers/global";
import landingSlice from "pages/Landing/reducers";
import dashboardSlice from "pages/Dashboard/reducers";
import { connectRouter } from "connected-react-router";

const createRootReducer = (history, injectedReducers = {}) => {
  return combineReducers({
    router: connectRouter(history),
    global,
    landingSlice,
    dashboardSlice,
    ...injectedReducers,
  });
};

export default createRootReducer;
