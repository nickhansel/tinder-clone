import React from "react";
import PropTypes from "prop-types";
import iconHealth from "media/images/icon-health.png";
import { ButtonHealthStyled } from "./styles";
import { getHealthColor } from "utils";
import { Note1 } from "common";

const HealthButton = ({ healthScore }) => {
  const healthColor = getHealthColor(healthScore);

  return (
    <ButtonHealthStyled style={{ backgroundColor: healthColor }}>
      <img src={iconHealth} alt="health score" />
      {healthScore}
    </ButtonHealthStyled>
  );
};

HealthButton.propTypes = {
  healthScore: PropTypes.number.isRequired,
};

export default HealthButton;
