import React from "react";
import PropTypes from "prop-types";
import { AvatarContainer, HealthButton, Budge } from "common";
import { ClientCardStyled, ContainerFlex, DividerStyled } from "./styles";
import { SubH1, Note2 } from "./Typography";
import { mainColors } from "utils";

const ClientCard = ({
  name,
  position,
  company,
  health,
  activity,
  strategy,
}) => {
  const renderBudges = strategy.map((strategyItem) => (
    <Budge strategy={strategyItem} />
  ));

  return (
    <ClientCardStyled>
      <AvatarContainer />
      <SubH1>{name}</SubH1>
      <Note2>
        {position} at {company}
      </Note2>
      <Note2 style={{ color: mainColors.grey2 }}>{activity}</Note2>
      <DividerStyled />
      <ContainerFlex style={{ paddingTop: 7 }}>
        <HealthButton healthScore={health} />
        <div>{renderBudges}</div>
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
};

export default ClientCard;
