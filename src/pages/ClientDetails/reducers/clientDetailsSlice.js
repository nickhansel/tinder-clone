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
  isNewNoteModal: false,
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
    toggleNewNoteModal(state, action) {
      state.isNewNoteModal = action.payload;
    },
    deleteNote(state, action) {
      const noteId = action.payload;
      const newNotes = state.notes.filter((note) => note.id !== noteId);
      state.notes = newNotes;
    },
    createNote(state, action) {
      // TODO add create in db
      const notesCopy = [...state.notes];
      notesCopy.unshift(action.payload);
      state.notes = notesCopy;
    },
  },
});

export const {
  setClientDetailsId,
  togglePointsModal,
  toggleNewNoteModal,
  deleteNote,
  createNote,
} = clientDetailsSlice.actions;
export default clientDetailsSlice.reducer;
