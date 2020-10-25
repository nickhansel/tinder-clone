import React from "react";
import PropTypes from "prop-types";
import { AvatarStyled } from "./styles";
import { greyBg } from "media/images";

const AvatarContainer = ({ mood, onAvatarClick, mode = "croped" }) => {
  const size = {
    full: 289,
    croped: 249,
  };

  return (
    <AvatarStyled
      onClick={onAvatarClick}
      style={{ height: size[mode], width: 230 }}
    >
      <img src={mood || greyBg} alt="" />
    </AvatarStyled>
  );
};

AvatarContainer.propTypes = {
  mood: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};

export default AvatarContainer;
