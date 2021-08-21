/*
  Client List component
*/

import React from 'react';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { deleteClientNote, updateClientNote } from 'graphql/mutations';

import { Note, CardWrap } from 'common';

const ClientDetailsNotesList = ({
  noteProps,
  setClientData,
  client,
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
    const newItems = notesData.filter(
      (note) => note.id !== noteId
    );
    const newClientData = {
      ...client,
      noteId: {
        items: [...newItems]
      }
    };
    deleteNote({
      variables: {
        input: {
          id: noteId,
        },
      },
    });

    if (!deleting) {
      setClientData(newClientData);
    }
  };
  const headerActions = [
    {
      name: 'delete',
      action: handleDeleteNote,
      processing: deleting,
      onConfirm: 'Deleted',
      confirmData: '',
      cancelData: '',
      resolveTitle: 'Are you sure?',
    },
  ];

  return (
    <>
      {notesData &&
        notesData.length > 0 &&
        notesData.slice(minVal, maxVal).map((note, index) => (
          <CardWrap {...noteProps}
            key={index}>
            <Note
              authorName={authorName}
              note={note}
              updating={updating}
              noteUpdateAction={handleUpdateNote}
              headerActions={headerActions}
            />
          </CardWrap>
        ))}
    </>
  );
};

export default ClientDetailsNotesList;
