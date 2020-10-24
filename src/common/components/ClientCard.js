import React from "react";
import PropTypes from "prop-types";
import { AvatarContainer, HealthButton, Badge } from "common";
import { SubH1, Note2 } from "./Typography";
import {
  ClientCardStyled,
  ContainerFlex,
  DividerStyled,
  BoldStyled,
} from "./styles";
import { mainColors, mockMoods } from "utils";

const ClientCard = ({
  id,
  activity,
  accountId: { name: company, healthScore },
  onNameClick,
  onAvatarClick,
  onBadgeClick,
  name: clientName,
  position,
  strategy: { items: strategyItems },
  status,
}) => {
  const clientMood = mockMoods[status];
  const renderBadges = strategyItems.map((strategyItem, index) => (
    <Badge key={index} strategy={strategyItem.badgeName} />
  ));

  // Props
  const avatarProps = {
    mood: clientMood,
    mode: "croped",
    onAvatarClick,
  };
  if (onNameClick) {
    avatarProps.onClick = () => onNameClick(id);
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
      <Note2>
        {position} at <BoldStyled>{company}</BoldStyled>
      </Note2>
      <Note2 {...noteProps}>{activity}</Note2>
      <DividerStyled />
      <ContainerFlex>
        <HealthButton healthScore={parseFloat(healthScore)} />
        <div {...badgeProps}>{renderBadges}</div>
      </ContainerFlex>
    </ClientCardStyled>
  );
};

ClientCard.propTypes = {
  clientName: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  health: PropTypes.number.isRequired,
  activity: PropTypes.string.isRequired,
  strategyItems: PropTypes.array,
  onNameClick: PropTypes.func,
  onBadgeClick: PropTypes.func,
};

export default ClientCard;
