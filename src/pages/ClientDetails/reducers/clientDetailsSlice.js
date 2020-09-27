/*
 * Client Details slice
 */

import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "utils/mock";

const initialState = {
  selectedClient: null,
};

const clientDetailsSlice = createSlice({
  name: "clientDetails",
  initialState,
});

export default clientDetailsSlice.reducer;
