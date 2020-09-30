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
export const selectTouchPoints = () =>
  createSelector(selectClientDetailsState, (state) => state.touchPoints);
export const selectPointsModal = () =>
  createSelector(selectClientDetailsState, (state) => state.isPointsModal);
