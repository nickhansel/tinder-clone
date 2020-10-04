import React from "react";
import PropTypes from "prop-types";
import { AvatarContainer, HealthButton, Badge } from "common";
import { ClientCardStyled, ContainerFlex, DividerStyled } from "./styles";
import { SubH1, Note2 } from "./Typography";
import { mainColors } from "utils";

const ClientCard = ({
  activity,
  cardAction,
  company,
  health,
  id,
  infoAction,
  name,
  position,
  strategy,
}) => {
  const renderBadges = strategy.map((strategyItem, index) => (
    <Badge key={index} strategy={strategyItem.name} />
  ));

  return (
    <ClientCardStyled>
      <AvatarContainer mode="croped" onClick={() => cardAction(id)} />
      <div onClick={() => cardAction(id)}>
        <SubH1>{name}</SubH1>
      </div>
      <Note2>
        {position} at {company}
      </Note2>
      <Note2 style={{ color: mainColors.grey2 }}>{activity}</Note2>
      <DividerStyled />
      <ContainerFlex style={{ paddingTop: 7 }}>
        <HealthButton healthScore={health} />
        <div onClick={() => infoAction(true, id)}>{renderBadges}</div>
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
  cardAction: PropTypes.func.isRequired,
  infoAction: PropTypes.func.isRequired,
};

export default ClientCard;
