/*
 * Dashboard slice
 */

import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "utils/mock";
import { BRANCH_NAME } from "../constants";

const initialState = {
  clients: mockData,
  filter: "all",
};

const dashboardSlice = createSlice({
  name: BRANCH_NAME,
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = dashboardSlice.actions;
export default dashboardSlice.reducer;
