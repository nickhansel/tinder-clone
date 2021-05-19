/*
  Client List component
*/

import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { deleteClientNote, updateClientNote } from 'graphql/mutations';
import { getClient } from 'graphql/queries';
import { Note, CardWrap } from 'common';

const ClientDetailsNotesList = ({
  noteProps,
  selectedClient,
  notesData,
  minVal,
  maxVal,
  authorName,
}) => {
  const [deleteNote, { loading: deleting }] = useMutation(
    gql(deleteClientNote)
  );

  const [updateNote, { loading: updating }] = useMutation(
    gql(updateClientNote)
  );

  const handleUpdateNote = (noteID, noteText) => {
    updateNote({
      variables: {
        input: {
          id: noteID,
          content: noteText,
        },
      },
    });
  };

  // Business logic
  const handleDeleteNote = (noteId) => {
    const updateCache = (client) => {
      const data = client.readQuery({
        query: gql(getClient),
        variables: {
          id: selectedClient,
        },
      });
      const newItems = data.getClient.noteId.items.filter(
        (note) => note.id !== noteId
      );

      client.writeQuery({
        query: gql(getClient),
        data: {
          __typename: 'Client',
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
				  <CardWrap {...noteProps}
				    key={index}>
				    <Note
				      deleting={deleting}
				      authorName={authorName}
				      note={note}
				      deleteNote={handleDeleteNote}
				      updating={updating}
				      updateNote={handleUpdateNote}
				    />
				  </CardWrap>
				))}
    </>
  );
};

export default ClientDetailsNotesList;
