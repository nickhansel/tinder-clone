/*
   Toolbox
 */

import React from "react";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import { Col, Row } from "antd";
import { SubH2, Note2, DragDropContainer } from "common";
import {
  iconBug,
  iconAdd,
  iconAttention,
  iconNewContact,
  iconEscalate,
  iconNewFeature,
} from "media/svg";
import { STRATEGIES } from "utils";

const { ATTENTION, BUG, CONTACT, FEATURE, ADD, ESCALATION } = STRATEGIES;

const ClientDetailsToolbox = ({ handleToggle, setSelectedStrategy }) => {
  const handleOnDragFinish = (name) => {
    console.log("name");
    console.log(name);
    setSelectedStrategy(name);
    handleToggle();
  };

  // Styles
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
  const renderActionIcon = (icon, name, drag) => (
    <Col>
      <div style={iconContainerStyle}>
        <img src={icon} style={iconStyle} alt="" />
        <Note2>{name}</Note2>
      </div>
    </Col>
  );

  const dragProps = {
    actionOnFinish: handleOnDragFinish,
  };

  return (
    <div>
      <SubH2>Toolbox</SubH2>
      <Row justify="space-around">
        <DragDropContainer name={"attention"} {...dragProps}>
          {renderActionIcon(iconAttention, ATTENTION)}
        </DragDropContainer>
        <DragDropContainer name={"bug"} {...dragProps}>
          {renderActionIcon(iconBug, BUG)}
        </DragDropContainer>
      </Row>
      <Row justify="space-around">
        <DragDropContainer name={"contact"} {...dragProps}>
          {renderActionIcon(iconNewContact, CONTACT)}
        </DragDropContainer>
        <DragDropContainer name={"escalation"} {...dragProps}>
          {renderActionIcon(iconEscalate, ESCALATION)}
        </DragDropContainer>
      </Row>
      <Row justify="space-around">
        <DragDropContainer name={"feature"} {...dragProps}>
          {renderActionIcon(iconNewFeature, FEATURE)}
        </DragDropContainer>
        <DragDropContainer name={"add"} {...dragProps}>
          {renderActionIcon(iconAdd, ADD)}
        </DragDropContainer>
      </Row>
    </div>
  );
};

ClientDetailsToolbox.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  setSelectedStrategy: PropTypes.func.isRequired,
};

export default ClientDetailsToolbox;
