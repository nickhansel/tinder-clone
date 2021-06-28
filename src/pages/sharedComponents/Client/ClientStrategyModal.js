/*
  Client Strategy modal component,
  contains a modal with a list of client strategies
 */
import React from 'react';
import PropTypes from 'prop-types';

import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { getClient } from 'graphql/queries';
import { deleteStrategy, updateStrategy } from 'graphql/mutations';

import { Modal, Divider } from 'antd';

import { Note, Loading } from 'common';

const ClientStrategyModal = ({
  selectedClientId,
  handleToggle,
  isBadgeModal,
  strategies,
  loading,
}) => {
  // gQL mutations
  const [deleteAction, { loading: deleting }] = useMutation(
    gql(deleteStrategy)
  );
  const [updateClientStrategy, { loading: updating }] = useMutation(
    gql(updateStrategy)
  );

  // Business logic
  const handleUpdateStrategy = (id, newData) => {
    updateClientStrategy({
      variables: {
        input: {
          id,
          ...newData,
        },
      },
    });
  };
  const handleDeleteStrategy = (strategyId, data='') => {
    const updateCache = (client) => {
      const newItems = data.getClient?.strategy?.items.filter(
        (item) => item.id !== strategyId
      );

      client.writeQuery({ // TODO: fix update cache
        query: gql(getClient),
        variables: {
          id: selectedClientId,
        },
        data: {
          getClient: {
            __typename: 'Client',
            ...data.getClient,
            strategy: {
              __typename: 'Strategy',
              items: newItems,
              nextToken: null
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
  };

  if (loading) {
    return <Loading />;
  }

  const headerActionsConfig = [
    {
      name: 'resolve',
      action: handleUpdateStrategy,
      processing: updating,
      onCancel: 'Sorry about the Loss',
      onConfirm: 'Congrats on the Win!',
      confirmData: { status: 'win'},
      cancelData: { status: 'loss'},
      resolveTitle: 'Was this strategy implemented successfully?',
    },
    {
      name: 'delete',
      action: handleDeleteStrategy,
      processing: deleting,
      onConfirm: 'Deleted',
      confirmData: '',
      cancelData: '',
      resolveTitle: 'Are you sure?',
    },
  ];

  const strategiesList = strategies.map((item, key) => {
    return (
      <div key={key}
        style={{ marginTop: 15 }}>
        <Note
          height={'auto'}
          authorName={''}
          note={item}
          headerActions={headerActionsConfig}
          noteUpdateAction={(id, description) => handleUpdateStrategy(id, { description })}
        />
        <Divider />
      </div>
    );
  });

  return (
    <Modal
      className='modal__client-startegies'
      visible={isBadgeModal}
      title='Strategies'
      onCancel={() => handleToggle(false, null)}
      footer={[]}>
      {strategiesList}
    </Modal>
  );
};

ClientStrategyModal.propTypes = {
  selectedClientId: PropTypes.string.isRequired,
  handleToggle: PropTypes.func.isRequired,
  isBadgeModal: PropTypes.bool.isRequired,
  strategies: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

export default ClientStrategyModal;
