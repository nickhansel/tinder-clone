/*
 *
 * Dashboard slice
 *
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clients: [],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
});

export default dashboardSlice.reducer;
