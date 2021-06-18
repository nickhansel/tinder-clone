import React from 'react';
import { SubH2, Direction, SpaceBetween } from 'common';
import { SubH2Blue } from './styles';

const InsightsMood = ({ clients }) => {
  const renderMoodList = clients.map((client, key) => (
    <SpaceBetween key={key}>
      <SubH2Blue>{client.name}</SubH2Blue>
      <Direction direction={client.change} />
    </SpaceBetween>
  ));

  // Props
  const titleProps = {
    style: {
      paddingBottom: 20,
    },
  };

  return (
    <div>
      <SubH2 {...titleProps}>Recent Mood Changes</SubH2>
      {renderMoodList}
    </div>
  );
};

export default InsightsMood;
