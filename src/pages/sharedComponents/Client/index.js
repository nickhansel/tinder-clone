/*
  Client component, displays client details,
  contains a modal with a list of client strategies
 */
import React, {useState} from 'react';
import PropTypes from 'prop-types';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { getClientStrategysEq } from 'graphql/queries';

import ClientCard from './ClientCard';
import ClientStrategyModal from './ClientStrategyModal';

const Client = ({
  client,
  onNameClick = () => {},
  setSelectedClient = () => {},
}) => {
  const [isBadgeModal, toggleBadgeModal] = useState(false);

  // gQL queries
  const { data = {}, loading } = useQuery(
    gql(getClientStrategysEq(`"assigned"`)), {
      variables: { id: client.id },
    }
  );
  const { items = [] } =  data.getClient ? data.getClient.strategy : {};

  // business logic
  const onBadgeClick = (state, id) => {
    toggleBadgeModal(state);
    setSelectedClient(id);
  };

  const clientCardProps = {
    ...client,
    dataStrategies: items,
    onNameClick,
    onBadgeClick,
  };

  return (
    <div>
      <ClientCard {...clientCardProps} />
      <ClientStrategyModal
        handleToggle={onBadgeClick}
        isBadgeModal={isBadgeModal}
        selectedClientId={client.id}
        strategies={items}
        loading={loading} />
    </div>
  );
};

ClientCard.propTypes = {
  client: PropTypes.string,
  onNameClick: PropTypes.func,
  setSelectedClient: PropTypes.func,
};

export default Client;