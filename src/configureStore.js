import { createStore, compose } from "redux";
import createReducer from "reducers";

const store = createStore(
  createReducer(),
  compose(
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
