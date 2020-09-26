/*
   Health Meter
 */

import React from "react";
import { Divider } from "antd";
import { iconHealth } from "media/svg";
import { SubTitle } from "components";

const iconStyle = {
  height: 10,
};
const iconContainerStyle = {
  background: "#8B929F",
  borderColor: "#8B929F",
  borderRadius: 10,
  borderStyle: "solid",
  borderWidth: 2,
  paddingRight: 10,
};
const rateStyle = {
  color: "#199F4E",
  fontWeight: 700,
  textAlign: "center",
};

const HealthMeter = () => {
  return (
    <div style={{ marginTop: 10 }}>
      <SubTitle>Health Meter</SubTitle>
      <div style={iconContainerStyle}>
        <img style={iconStyle} src={iconHealth} alt="" />
      </div>
      <div style={rateStyle}>4.8/5</div>
      <Divider style={{ marginTop: 10 }} />
    </div>
  );
};

export default HealthMeter;
