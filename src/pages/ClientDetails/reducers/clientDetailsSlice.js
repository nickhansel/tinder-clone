/*
 * Client Details slice
 */

import { createSlice } from "@reduxjs/toolkit";
import { mockData, notesMock, touchPointsMock } from "utils/mock";

const initialState = {
  clientId: null,
  client: {
    ...mockData[3],
  },
  notes: notesMock,
  touchPoints: touchPointsMock,
  isPointsModal: false,
};

const clientDetailsSlice = createSlice({
  name: "clientDetails",
  initialState,
  reducers: {
    setClientDetailsId(state, action) {
      state.clientId = action.payload;
    },
    togglePointsModal(state, action) {
      state.isPointsModal = action.payload;
    },
  },
});

export const {
  setClientDetailsId,
  togglePointsModal,
} = clientDetailsSlice.actions;
export default clientDetailsSlice.reducer;
