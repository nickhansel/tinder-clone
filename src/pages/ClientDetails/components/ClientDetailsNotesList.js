/*
  Client List component
 */

import React from "react";
import ClientDetailCard from "./ClientDetailCard";
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
            <Note name={authorName} note={note} />
          </ClientDetailCard>
        ))}
    </>
  );
};

export default ClientDetailsNotesList;
