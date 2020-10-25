/*
  Client List component
 */

import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { deleteClientNote } from "graphql/mutations";
import { listClientNotesDetails } from "graphql/queries";
import { Note, CardWrap } from "common";

const ClientDetailsNotesList = ({
  noteProps,
  slectedClient,
  notesData,
  minVal,
  maxVal,
  authorName,
}) => {
  const [deleteNote, { loading: deleting }] = useMutation(
    gql(deleteClientNote)
  );

  // Business logic
  const handleDeleteNote = (noteId) => {
    const updateCache = (client) => {
      const data = client.readQuery({ query: gql(listClientNotesDetails) });
      const newItems = data.listClientNotes.items.filter(
        (note) => note.id !== noteId
      );

      client.writeQuery({
        query: gql(listClientNotesDetails),
        data: {
          __typename: "ClientNotes",
          listClientNotes: { ...data.listClientNotes, items: newItems },
        },
      });
    };

    deleteNote({
      variables: {
        input: {
          id: noteId,
        },
      },
      update: updateCache,
    });
  };

  return (
    <>
      {notesData &&
        notesData.length > 0 &&
        notesData.slice(minVal, maxVal).map((note, index) => (
          <CardWrap {...noteProps} key={index}>
            <Note
              deleting={deleting}
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
