/*
   Toolbox
 */

import React from "react";
import { Col, Row } from "antd";
import { Title } from "components";
import {
  iconBug,
  iconAdd,
  iconAttention,
  iconNewContact,
  iconEscalate,
  iconNewFeature 
} from "media/svg";

const iconStyle = {
  height: 50,
  margin: 12,
  width: 50,
}
const iconContainerStyle = {
  fontSize: 12,
  textAlign: 'center',
  verticalAlign: 'middle',
  width: 'max-content',
}
const renderActionIcon = (icon, name) => (
  <Col span={6}>
    <div style={iconContainerStyle}>
      <img src={icon} style={iconStyle} alt="" />
      <p>{name}</p>
    </div>
  </Col>
)

const Toolbox = () => {
  return (
    <div>
      <Title>Toolbox</Title>
      <Row justify='space-around'>
        {renderActionIcon(iconAttention, 'Attention')}
        {renderActionIcon(iconBug, 'Bug')}
      </Row>
      <Row justify='space-around'>
        {renderActionIcon(iconNewContact, 'New Contact')}
        {renderActionIcon(iconEscalate, 'Escalation')}
      </Row>
      <Row justify='space-around'>
        {renderActionIcon(iconNewFeature, 'New Feature')}
        {renderActionIcon(iconAdd, 'Add')}
      </Row>
    </div>
  );
};

export default Toolbox;
