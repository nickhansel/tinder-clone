/*
  Client List component
*/

import React from 'react';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { deleteClientNote, updateClientNote } from 'graphql/mutations';

import { Divider } from 'antd';

import { Note } from 'common';

const Notes = ({
  data,
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
    deleteNote({
      variables: {
        input: {
          id: noteId,
        },
      },
    });
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
  console.log({data})
  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((note, index) => (
          <div key={index}>
            <Note
              authorName={note.ownerId.name}
              note={note}
              updating={updating}
              noteUpdateAction={handleUpdateNote}
              headerActions={headerActions}
            />
            <Divider />
          </div>
        ))}
    </>
  );
};

export default Notes;
