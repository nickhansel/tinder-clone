/*
  Strategies component,
  displayes a list of strategies
 */
import React from 'react';
import PropTypes from 'prop-types';
  
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { deleteStrategy, updateStrategy } from 'graphql/mutations';
  
import { Divider } from 'antd';
  
import { Note, Loading } from 'common';
  
const Strategies = ({
  data,
  loading,
  clientData,
  setClientData
}) => {
  // gQL mutations
  const [deleteAction, { loading: deleting }] = useMutation(
    gql(deleteStrategy), {
      onCompleted({deleteStrategy}) {
        const newStartegies = data.filter((item) => item.id != deleteStrategy.id);

        const newClientData = {
          ...clientData,
          strategy: {
            items: [...newStartegies]
          }
        };
        if (setClientData) {
          setClientData(newClientData);
        }
      }
    }
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
  const handleDeleteStrategy = (strategyId) => {
    deleteAction({
      variables: {
        input: {
          id: strategyId,
        },
      },
    });
  };

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
  
  const strategiesList = data.map((item, key) => {
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
  
  return strategiesList;
};
  
Strategies.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};
  
export default Strategies;
  