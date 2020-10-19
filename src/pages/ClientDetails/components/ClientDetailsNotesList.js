/*
  Client List component
 */

import React from "react";
import { deleteNote } from "../reducers/clientDetailsSlice";
import { Note, CardWrap } from "common";

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
          <CardWrap {...noteProps} key={index}>
            <Note authorName={authorName} note={note} deleteNote={deleteNote} />
          </CardWrap>
        ))}
    </>
  );
};

export default ClientDetailsNotesList;
