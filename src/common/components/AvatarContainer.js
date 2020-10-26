import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "antd";
import { AvatarStyled } from "./styles";
import { greyBg } from "media/images";
import { iconStarMaker, iconCrown } from "media/svg";

const AvatarContainer = ({
  mood,
  onAvatarClick,
  mode = "croped",
  isDecisionMaker,
  isChamp,
}) => {
  const size = {
    full: 289,
    croped: 249,
  };

  const champIcon = isChamp ? (
    <Tooltip title="Champion" placement="topLeft">
      <img
        style={{
          height: 32,
          left: 188,
          top: 5,
          position: "absolute",
          width: 32,
        }}
        src={iconCrown}
        alt=""
      />
    </Tooltip>
  ) : null;
  const decisionMakerIcon = isDecisionMaker ? (
    <Tooltip title="Decision Maker" placement="topLeft">
      <img
        style={{
          height: 32,
          left: 188,
          position: "absolute",
          top: isChamp ? 40 : 5,
          width: 32,
        }}
        src={iconStarMaker}
        alt=""
      />
    </Tooltip>
  ) : null;

  return (
    <AvatarStyled
      onClick={onAvatarClick}
      style={{ height: size[mode], width: 230 }}
    >
      <div style={{ position: "relative" }}>
        {champIcon}
        {decisionMakerIcon}
      </div>
      <img src={mood || greyBg} alt="" />
    </AvatarStyled>
  );
};

AvatarContainer.propTypes = {
  mood: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};

export default AvatarContainer;
