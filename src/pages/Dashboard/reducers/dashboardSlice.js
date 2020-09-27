/*
 * Dashboard slice
 */

import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "utils/mock";

const initialState = {
  clients: mockData,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
});

export default dashboardSlice.reducer;
