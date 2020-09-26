import React from "react";
import PropTypes from "prop-types";
import iconHealth from "media/images/icon-health.png";
import { ButtonHealthStyled } from "./styles";
import { mintGreen, roseRed, mustardYellow } from "utils";
import { Note1 } from "common";

const HealthButton = ({ healthScore }) => {
  let healthColor = mintGreen;

  if (healthColor < 4 && healthColor >= 3) {
    healthColor = mustardYellow;
  }
  if (healthColor < 3) {
    healthColor = roseRed;
  }

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
