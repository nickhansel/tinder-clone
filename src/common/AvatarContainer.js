import React from "react";
import PropTypes from "prop-types";
import { AvatarStyled } from "./styles";

const AvatarContainer = ({ mood, mode = "croped" }) => {
  const size = {
    full: 289,
    croped: 249,
  };

  return (
    <AvatarStyled style={{ height: size[mode] }}>
      <img src={mood} alt="" />
    </AvatarStyled>
  );
};

AvatarContainer.propTypes = {
  mood: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};

export default AvatarContainer;
