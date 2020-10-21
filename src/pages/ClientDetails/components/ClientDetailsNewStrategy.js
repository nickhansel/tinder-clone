import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Modal, Row, Form, Input, Button, Divider, Col, message } from "antd";
import {
  Badge,
  TextInfo,
  Flex,
  BoldStyled,
  Note1Grey,
  StrategyIcons,
} from "common";
import { BADGES, mainColors } from "utils";
import { STRATEGY_MESSAGES } from "../constants";

const { TextArea } = Input;
const badgeNames = Object.values(BADGES);

// Styles
const formStyle = {
  labelCol: { span: 8 },
  wrapperCol: { span: 22 },
  layout: "vertical",
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 22 },
};

const ClientDetailsNewStrategy = ({
  client,
  selectedStrategy,
  setSelectedStrategy,
  isNewStrategyModal,
  handleToggle,
}) => {
  const { company } = client;

  useEffect(() => {
    console.log(selectedStrategy);
  }, [selectedStrategy]);

  // Business logic
  const onFinish = (values) => {
    message.success("Strategy created");
    handleToggle();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleStrategyClick = (strategyName) => {
    setSelectedStrategy(strategyName);
  };

  // Render components
  const renderForm = (
    <Form
      {...formStyle}
      name="new-strategy"
      className="details-new-strategy-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input note title" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Text"
        name="text"
        rules={[{ required: true, message: "Please note text" }]}
      >
        <TextArea />
      </Form.Item>
      {/* <Form.Item {...tailLayout}></Form.Item> */}
    </Form>
  );
  const selected = selectedStrategy || "";
  const modalTitle = (
    <div>
      <span>
        Assign a Strategy Badge to the <BoldStyled>{company}</BoldStyled>{" "}
        Account
      </span>
      <Note1Grey>
        {`Select a strategy and fill out a gameplan to improve and strenghten
        your realtionship with ${company}`}
      </Note1Grey>
    </div>
  );
  // currently selected badge would keep it's color
  const renderBages = badgeNames.map((name) => {
    const badgeColor = selected !== name ? mainColors.grey3 : false;

    return (
      <Col style={{ height: 70 }} onClick={() => handleStrategyClick(name)}>
        {StrategyIcons[name](badgeColor)}
      </Col>
    );
  });
  const renderStrategyMessage = (
    <TextInfo style={{ padding: "14px 0px 0px 24px" }}>
      {selected ? STRATEGY_MESSAGES[selected](company) : null}
    </TextInfo>
  );

  return (
    <Modal
      bodyStyle={{ height: 340 }}
      className="new-strategy-modal"
      width={800}
      visible={isNewStrategyModal}
      title={modalTitle}
      onCancel={() => handleToggle(false)}
      footer={[
        <Button
          style={{ backgroundColor: "#FFFF", borderRadius: 8, width: 100 }}
          key="back"
          onClick={() => handleToggle(false)}
        >
          Cancel
        </Button>,
        <Button
          key="submit"
          htmlType="submit"
          type="primary"
          style={{
            backgroundColor: "#14709F",
            borderRadius: 8,
            marginLeft: 173,
            width: 100,
          }}
          onClick={() => handleToggle(false)}
        >
          Confirm
        </Button>,
      ]}
    >
      <Flex>
        <Row
          gutter={[20, 20]}
          style={{
            flexWrap: "wrap",
            width: 220,
            justifyContent: "space-around",
          }}
        >
          {renderBages}
          {renderStrategyMessage}
        </Row>
        <Divider
          type="vertical"
          style={{
            height: 270,
            marginLeft: 40,
          }}
        />
        <div style={{ paddingLeft: 30 }}>{renderForm}</div>
      </Flex>
    </Modal>
  );
};

ClientDetailsNewStrategy.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default ClientDetailsNewStrategy;
