/*
  Client Details  Selector
 */

import { createSelector } from "reselect";

const selectClientDetailsState = (state) => {
  return state.clientDetailsSlice;
};

export const selectClient = () =>
  createSelector(selectClientDetailsState, (state) => state.client);

export const selectClientNotes = () =>
  createSelector(selectClientDetailsState, (state) => state.notes);
