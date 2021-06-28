/*
  Client Card component, displays client details
*/
import React from 'react';
import PropTypes from 'prop-types';

import { 
  AvatarContainer,
  HealthButton,
  Badge,
  SubH1,
  Note2 
} from 'common';
import {
  ClientCardStyled,
  ContainerFlex,
  DividerStyled,
  BoldStyled,
} from 'common/components/styles';
import { mainColors, mockMoods } from 'utils';
import { ellipsis } from 'polished';

const ClientCard = ({
  // client data
  id,
  isDecisionMaker,
  avatarId,
  accountId: { healthScore, name: companyName },
  name: clientName,
  position = '',
  lastContact,
  dataStrategies,
  // actions
  onNameClick,
  onBadgeClick,
}) => {
  const isImpatient = avatarId === 'impatientGirl';
  const clientMood = mockMoods[avatarId];

  const renderBadges = dataStrategies.map((strategyItem, index) => (
    <Badge key={index}
      strategy={strategyItem.badgeName} />
  ));

  // Props
  const avatarProps = {
    id: id,
    clientName,
    isDecisionMaker,
    mood: clientMood,
    mode: 'croped',
    isChamp: healthScore > 4.5,
    isImpatient,
  };

  if (onNameClick) {
    avatarProps.onClick = () => onNameClick(id, clientName);
  }

  const noteProps = {
    style: { color: mainColors.grey2 },
  };
  const badgeProps = onBadgeClick
    ? { onClick: () => onBadgeClick(true, id) }
    : {};

  return (
    <ClientCardStyled>
      <AvatarContainer {...avatarProps} />
      <div onClick={() => onNameClick(id)}>
        <SubH1>{clientName}</SubH1>
      </div>
      <Note2>{position || 'N/A' }</Note2>
      <Note2>
        <BoldStyled
          ellipsis={ellipsis 
            ? {rows: 1, expandable: true, symbol: 'more'} 
            : false}>
          {companyName}
        </BoldStyled>
      </Note2>
      <Note2 {...noteProps}>{lastContact || 'Last activity:'}</Note2>
      <DividerStyled />
      <ContainerFlex>
        <HealthButton healthScore={parseFloat(healthScore)} />
        <div {...badgeProps}>{renderBadges}</div>
      </ContainerFlex>
    </ClientCardStyled>
  );
};

ClientCard.propTypes = {
  id: PropTypes.string,
  isDecisionMaker: PropTypes.bool,
  avatarId: PropTypes.string,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  accountId: PropTypes.object.isRequired,
  strategyItems: PropTypes.array,
  onNameClick: PropTypes.func,
  onBadgeClick: PropTypes.func,
  lastContact: PropTypes.string,
  strategy: PropTypes.object,
};

export default ClientCard;
