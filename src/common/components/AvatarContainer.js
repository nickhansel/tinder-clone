import React from "react";
import PropTypes from "prop-types";
import { AvatarStyled } from "./styles";
import { greyBg } from "media/images";
import { iconStarMaker } from "media/svg";

const AvatarContainer = ({
  mood,
  onAvatarClick,
  mode = "croped",
  isDecisionMaker,
}) => {
  const size = {
    full: 289,
    croped: 249,
  };

  const extraImg = isDecisionMaker ? (
    <div style={{ position: "relative" }}>
      <img
        style={{
          height: 32,
          left: 188,
          position: "absolute",
          top: 5,
          width: 32,
        }}
        src={iconStarMaker}
        alt=""
      />
    </div>
  ) : null;

  return (
    <AvatarStyled
      onClick={onAvatarClick}
      style={{ height: size[mode], width: 230 }}
    >
      {extraImg}
      <img src={mood || greyBg} alt="" />
    </AvatarStyled>
  );
};

AvatarContainer.propTypes = {
  mood: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};

export default AvatarContainer;
