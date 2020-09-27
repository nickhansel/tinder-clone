import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createRootReducer from "reducers";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(routerMiddleware(history), thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default function configureStore() {
  store.injectedReducers = {};

  store.injectReducer = (key, asyncReducer) => {
    store.injectedReducers[key] = asyncReducer;
    store.replaceReducer(createRootReducer(store.injectedReducers));
  };

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      store.replaceReducer(createRootReducer(store.injectedReducers));
    });
  }

  return store;
}

export function getStore() {
  return store;
}
