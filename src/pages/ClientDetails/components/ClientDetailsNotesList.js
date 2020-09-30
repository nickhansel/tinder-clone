/*
  Client List component
 */

import React from "react";
import ClientDetailCard from "./ClientDetailCard";
import { deleteNote } from "../reducers/clientDetailsSlice";
import { Note } from "common";

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
          <ClientDetailCard {...noteProps} key={index}>
            <Note authorName={authorName} note={note} deleteNote={deleteNote} />
          </ClientDetailCard>
        ))}
    </>
  );
};

export default ClientDetailsNotesList;
