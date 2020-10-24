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
  activity,
  company,
  health,
  id,
  cardAction,
  avatarAction,
  infoAction,
  name,
  position,
  strategy,
  status,
}) => {
  const clientMood = mockMoods[status];
  const renderBadges = strategy.map((strategyItem, index) => (
    <Badge key={index} strategy={strategyItem.name} />
  ));

  // Props
  const avatarProps = {
    mood: clientMood,
    mode: "croped",
    avatarAction,
  };
  if (cardAction) {
    avatarProps.onClick = () => cardAction(id);
  }
  const noteProps = {
    style: { color: mainColors.grey2 },
  };
  const badgeProps = infoAction ? { onClick: () => infoAction(true, id) } : {};

  return (
    <ClientCardStyled>
      <AvatarContainer {...avatarProps} />
      <div onClick={() => cardAction(id)}>
        <SubH1>{name}</SubH1>
      </div>
      <Note2>
        {position} at <BoldStyled>{company}</BoldStyled>
      </Note2>
      <Note2 {...noteProps}>{activity}</Note2>
      <DividerStyled />
      <ContainerFlex>
        <HealthButton healthScore={health} />
        <div {...badgeProps}>{renderBadges}</div>
      </ContainerFlex>
    </ClientCardStyled>
  );
};

ClientCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  health: PropTypes.number.isRequired,
  activity: PropTypes.string.isRequired,
  strategy: PropTypes.array,
  cardAction: PropTypes.func,
  infoAction: PropTypes.func,
};

export default ClientCard;
