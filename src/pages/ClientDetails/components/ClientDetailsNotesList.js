/*
  Client List component
 */

import React from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { deleteClientNote } from "graphql/mutations";
import { getClient } from "graphql/queries";
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
      const data = client.readQuery({
        query: gql(getClient),
        variables: {
          id: slectedClient,
        },
      });
      const newItems = data.getClient.noteId.items.filter(
        (note) => note.id !== noteId
      );

      client.writeQuery({
        query: gql(getClient),
        data: {
          __typename: "Client",
          getClient: {
            ...data.getClient,
            noteId: {
              items: newItems,
            },
          },
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
