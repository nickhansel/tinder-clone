import React from "react";
import PropTypes from "prop-types";
import { iconBug, iconAttention, iconEscalate, iconNewContact } from "media/svg";
import { BudgeStyled } from "./styles";

const statusData = {
  attention: iconAttention,
  bug: iconBug,
  escalate: iconEscalate,
  contact: iconNewContact
}

const Budge = ({ strategy }) => {
  const handleBudgeClick = () => {
    // open modal
  }

  return (
    <BudgeStyled onClick={handleBudgeClick}>
      <img src={statusData[strategy]} alt="health score" />
    </BudgeStyled>
  );
};

Budge.propTypes = {
  strategy: PropTypes.string.isRequired,
};

export default Budge;
