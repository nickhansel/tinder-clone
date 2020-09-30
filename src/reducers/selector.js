/*
  Global  Selector
 */

import { createSelector } from "reselect";

const selectGlobalState = (state) => {
  return state.global;
};

export const selectUser = () =>
  createSelector(selectGlobalState, (state) => state.user);
