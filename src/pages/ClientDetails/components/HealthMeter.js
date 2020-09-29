/*
   Health Meter
 */

import React from "react";
import { Note1Grey, DividerStyled, SpaceBetween } from "common";
import { getHealthColor, getHealthLen } from "utils";

const HealthMeter = ({ healthScore }) => {
  const healthColor = getHealthColor(healthScore);
  const healthLen = getHealthLen(healthScore);

  const iconContainerStyle = {
    background: "#ffffff",
    borderColor: "#BDBDBD",
    borderRadius: 24,
    borderStyle: "solid",
    borderWidth: 0.8,
    height: 18,
    paddingRight: 10,
    width: 264,
  };
  const healthStyle = {
    backgroundColor: healthColor,
    borderRadius: 24,
    height: 12,
    marginTop: 2,
    marginLeft: 2,
    width: healthLen,
  };
  const rateStyle = {
    color: "#199F4E",
    fontWeight: 700,
    textAlign: "center",
  };

  return (
    <div style={{ marginTop: 10 }}>
      <SpaceBetween>
        <Note1Grey>Health Meter</Note1Grey>
        <span style={rateStyle}>4.8/5</span>
      </SpaceBetween>
      <div style={iconContainerStyle}>
        <div style={healthStyle} />
      </div>
    </div>
  );
};

export default HealthMeter;
