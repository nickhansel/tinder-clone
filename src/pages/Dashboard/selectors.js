/*
  Dashboard  Selector
 */

import { createSelector } from "@reduxjs/toolkit";

const selectDashboardState = (state) => {
  console.log(state);

  return state.dashboard;
};

export const selectClients = () =>
  createSelector(selectDashboardState, (state) => state.clients);
