/*
  Dashboard  Selector
 */

import { createSelector } from "reselect";

const selectDashboardState = (state) => {
  return state.dashboardSlice;
};

export const selectClients = () =>
  createSelector(selectDashboardState, (state) => state);
