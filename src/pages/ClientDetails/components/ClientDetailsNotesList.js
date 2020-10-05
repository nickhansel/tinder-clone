/*
  Client List component
 */

import React from "react";
import { deleteNote } from "../reducers/clientDetailsSlice";
import { Note, CardContainer } from "common";

const ClientDetailsNotesList = ({
  noteProps,
  notesData,
  minVal,
  maxVal,
  authorName,
}) => {
  return (
    <>
      {notesData &&
        notesData.length > 0 &&
        notesData.slice(minVal, maxVal).map((note, index) => (
          <CardContainer {...noteProps} key={index}>
            <Note authorName={authorName} note={note} deleteNote={deleteNote} />
          </CardContainer>
        ))}
    </>
  );
};

export default ClientDetailsNotesList;
