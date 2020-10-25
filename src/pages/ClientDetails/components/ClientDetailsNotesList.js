/*
  Client List component
 */

import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { deleteClientNote } from "graphql/mutations";
import { Note, CardWrap } from "common";

const ClientDetailsNotesList = ({
  noteProps,
  notesData,
  minVal,
  maxVal,
  authorName,
}) => {
  const [deleteNote] = useMutation(gql(deleteClientNote));

  // Business logic
  const handleDeleteNote = (noteId) => {
    deleteNote({
      variables: {
        input: {
          id: noteId,
        },
      },
      // update: updateCache,
    });
  };

  return (
    <>
      {notesData &&
        notesData.length > 0 &&
        notesData.slice(minVal, maxVal).map((note, index) => (
          <CardWrap {...noteProps} key={index}>
            <Note
              authorName={authorName}
              note={note}
              deleteNote={handleDeleteNote}
            />
          </CardWrap>
        ))}
    </>
  );
};

export default ClientDetailsNotesList;
