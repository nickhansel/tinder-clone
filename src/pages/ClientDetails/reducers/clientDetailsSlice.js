/*
 * Client Details slice
 */

import { createSlice } from "@reduxjs/toolkit";
import { mockData, notesMock } from "utils/mock";

const initialState = {
  clientId: null,
  client: {
    ...mockData[3],
  },
  notes: notesMock,
};

const clientDetailsSlice = createSlice({
  name: "clientDetails",
  initialState,
  reducers: {
    setClientDetailsId(state, action) {
      state.clientId = action.payload;
    },
  },
});

export default clientDetailsSlice.reducer;
