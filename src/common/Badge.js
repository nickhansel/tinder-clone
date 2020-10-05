import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "antd";
import {
  iconBug,
  iconAttention,
  iconEscalate,
  iconNewContact,
  iconNewFeature,
  iconCustom,
} from "media/svg";
import { BudgeStyled } from "./styles";

const statusData = {
  attention: iconAttention,
  bug: iconBug,
  escalation: iconEscalate,
  contact: iconNewContact,
  feature: iconNewFeature,
  custom: iconCustom,
};

const Badge = ({ strategy, size }) => {
  let dimentions = 32;

  if (size === "lrg") {
    dimentions = 50;
  }

  const style = {
    height: dimentions,
    width: dimentions,
  };

  return (
    <BudgeStyled style={style}>
      <Tooltip title={strategy.toUpperCase()}>
        <img src={statusData[strategy]} alt="health score" />
      </Tooltip>
    </BudgeStyled>
  );
};

Badge.propTypes = {
  strategy: PropTypes.string.isRequired,
};

export default Badge;
