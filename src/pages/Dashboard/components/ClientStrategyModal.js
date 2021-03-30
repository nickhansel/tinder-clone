import React from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { getClient } from 'graphql/queries';
import { deleteStrategy } from 'graphql/mutations';
import { Modal, Divider } from 'antd';
import { Note, Loading } from 'common';

const ClientStrategyModal = ({
  selectedClientId,
  handleToggle,
  isBadgeModal,
}) => {
  const { loading, data, error } = useQuery(gql(getClient), {
    variables: { id: selectedClientId },
  });
  const [deleteAction, { loading: deleting }] = useMutation(
    gql(deleteStrategy)
  );

  // Business logic
  const handleDeleteStrategy = (strategyId) => {
    const updateCache = (client) => {
      const newItems = data.getClient.strategy.items.filter(
        (item) => item.id !== strategyId
      );

      client.writeQuery({
        query: gql(getClient),
        data: {
          __typename: 'Client',
          getClient: {
            ...data.getClient,
            strategy: {
              items: newItems,
            },
          },
        },
      });
    };

    deleteAction({
      variables: {
        input: {
          id: strategyId,
        },
      },
      update: updateCache,
    });

    if (data.getClient.strategy.items.length === 1) {
      handleToggle(false, null);
    }
  };

  const isLoading = loading || error;
  const clientStrategys =
    !isLoading && data.getClient ? data.getClient.strategy.items : [];

  const renderNotes = loading ? (
    <Loading />
  ) : (
    clientStrategys.map((item, key) => {
      return (
        <div key={key}
          style={{ marginTop: 15 }}>
          <Note
            height={95}
            type="strategy"
            authorName={data.getClient.contactId.name}
            note={item}
            deleteNote={handleDeleteStrategy}
          />
          <Divider />
        </div>
      );
    })
  );

  return (
    <Modal
      className="modal__client-startegys"
      visible={isBadgeModal}
      title="Notes"
      onCancel={() => handleToggle(false, null)}
      footer={[]}
    >
      {renderNotes}
    </Modal>
  );
};

export default ClientStrategyModal;
