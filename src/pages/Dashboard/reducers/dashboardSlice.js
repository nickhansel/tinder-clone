/*
 * Dashboard slice
 */

import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "utils/mock";
import { BRANCH_NAME } from "../constants";

const initialState = {
  clients: mockData,
  filter: "all",
  isBadgeModal: false,
  selectedClientId: null,
};

const dashboardSlice = createSlice({
  name: BRANCH_NAME,
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    toggleBadgeModal(state, action) {
      state.isBadgeModal = action.payload;
    },
    setSelectedClient(state, action) {
      state.selectedClientId = action.payload;
    },
  },
});

export const {
  setFilter,
  toggleBadgeModal,
  setSelectedClient,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
