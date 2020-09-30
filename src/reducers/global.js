/*
 * Global features
 */

import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    appPending: true,
    user: {
      id: 12,
      teamId: 22,
      name: "Blake",
      password: "",
    },
  },
  reducers: {
    setAppReady(state) {
      state.appPending = false;
    },
  },
});

export const { setAppReady } = globalSlice.actions;

export default globalSlice.reducer;
