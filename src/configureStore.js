import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import createReducer from "reducers";
import { browserHistory as history } from "lib/history";

const store = createStore(
  createReducer(),
  compose(
    applyMiddleware(routerMiddleware(history)),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default function configureStore() {
  store.injectedReducers = {};

  store.injectReducer = (key, asyncReducer) => {
    store.injectedReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.injectedReducers));
  };

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}

export function getStore() {
  return store;
}
