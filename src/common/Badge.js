import React from "react";
import PropTypes from "prop-types";
import {
  iconBug,
  iconAttention,
  iconEscalate,
  iconNewContact,
} from "media/svg";
import { BudgeStyled } from "./styles";

const statusData = {
  attention: iconAttention,
  bug: iconBug,
  escalate: iconEscalate,
  contact: iconNewContact,
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
      <img src={statusData[strategy]} alt="health score" />
    </BudgeStyled>
  );
};

Badge.propTypes = {
  strategy: PropTypes.string.isRequired,
};

export default Badge;
