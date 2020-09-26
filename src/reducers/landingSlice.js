/*
 * Global features
 */

import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    appPending: true,
  },
  reducers: {
    setAppReady(state) {
      state.appPending = false;
    },
  },
});

export const { setAppReady } = globalSlice.actions;

export default globalSlice.reducer;
