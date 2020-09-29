import React from "react";
import PropTypes from "prop-types";
import { AvatarStyled } from "./styles";

const AvatarContainer = ({ strategy, mode = "croped" }) => {
  const size = {
    full: 289,
    croped: 249,
  };

  return <AvatarStyled style={{ height: size[mode] }} />;
};

AvatarContainer.propTypes = {
  mode: PropTypes.string.isRequired,
};

export default AvatarContainer;
