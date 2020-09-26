import React from "react";
import PropTypes from "prop-types";
import { AvatarContainer, HealthButton, Budge } from "common";
import { ClientCardStyled, ContainerFlex, DividerStyled } from "./styles";
import { SubH1, Note2 } from "./Typography";
import { mainColors } from "utils";

const ClientCard = ({ name, position, company }) => {
  return (
    <ClientCardStyled>
      <AvatarContainer />
      <SubH1>Name</SubH1>
      <Note2>Director of Marketing at Jones & Waller</Note2>
      <Note2 style={{ color: mainColors.grey2 }}>
        Last activity is at 9:23PM on 24/08/2020
      </Note2>
      <DividerStyled />
      <ContainerFlex style={{ paddingTop: 7 }}>
        <HealthButton healthScore={3} />
        <Budge strategy="bug" />
      </ContainerFlex>
    </ClientCardStyled>
  );
};

ClientCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default ClientCard;
