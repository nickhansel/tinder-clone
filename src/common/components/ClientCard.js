import React from 'react';
import PropTypes from 'prop-types';
import { AvatarContainer, HealthButton, Badge } from 'common';
import { SubH1, Note2 } from './Typography';
import {
  ClientCardStyled,
  ContainerFlex,
  DividerStyled,
  BoldStyled,
} from './styles';
import { mainColors, mockMoods } from 'utils';
import { ellipsis } from 'polished';

const ClientCard = ({
  id,
  isDecisionMaker,
  avatarId,
  accountId: { healthScore, name: companyName },
  onNameClick,
  onBadgeClick,
  name: clientName,
  position = '',
  lastContact,
  strategy: { items: strategyItems },
}) => {
  const score = parseFloat(healthScore);
  const isChamp = score > 4.5;
  const isImpatient = avatarId === 'impatientGirl';
  const clientMood = mockMoods[avatarId];

  const assignedStrategies = strategyItems.filter(item => item.status === 'assigned');

  const renderBadges = assignedStrategies.map((strategyItem, index) => (
    <Badge key={index}
      strategy={strategyItem.badgeName} />
  ));

  // Props
  const avatarProps = {
    mood: clientMood,
    mode: 'croped',
    isDecisionMaker,
    isChamp,
    isImpatient,
    id: id,
    clientName: clientName
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
        <BoldStyled ellipsis={ellipsis ? {rows: 1, expandable: true, symbol: 'more'}: false}>{companyName}</BoldStyled>
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
