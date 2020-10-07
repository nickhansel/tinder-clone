/*
   Toolbox
 */

import React from "react";
import { useDrag } from "react-dnd";
import { Col, Row } from "antd";
import { SubH2, Note2 } from "common";
import {
  iconBug,
  iconAdd,
  iconAttention,
  iconNewContact,
  iconEscalate,
  iconNewFeature,
} from "media/svg";

const iconStyle = {
  height: 48,
  margin: 8,
  width: 48,
};
const iconContainerStyle = {
  fontSize: 12,
  textAlign: "center",
  verticalAlign: "middle",
  width: "max-content",
};
const renderActionIcon = (icon, name) => (
  <Col>
    <div style={iconContainerStyle}>
      <img src={icon} style={iconStyle} alt="" />
      <Note2>{name}</Note2>
    </div>
  </Col>
);

const ClientDetailsToolbox = () => {
  return (
    <div>
      <SubH2>Toolbox</SubH2>
      <Row justify="space-around">
        {renderActionIcon(iconAttention, "Attention")}
        {renderActionIcon(iconBug, "Bug")}
      </Row>
      <Row justify="space-around">
        {renderActionIcon(iconNewContact, "New Contact")}
        {renderActionIcon(iconEscalate, "Escalation")}
      </Row>
      <Row justify="space-around">
        {renderActionIcon(iconNewFeature, "New Feature")}
        {renderActionIcon(iconAdd, "Add")}
      </Row>
    </div>
  );
};

export default ClientDetailsToolbox;
