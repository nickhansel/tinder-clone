import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Form, Input, Button, Divider, message } from "antd";
import { Badge, Flex, BoldStyled, Note1Grey, StrategyIcons } from "common";
import { BADGES } from "utils";

const { TextArea } = Input;
const badgeNames = Object.values(BADGES);

const ClientDetailsNewStrategy = ({
  client,
  selectedStrategy,
  isNewStrategyModal,
  handleToggle,
}) => {
  const onFinish = (values) => {
    message.success("Strategy created");
    handleToggle();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };
  const renderForm = (
    <Form
      {...layout}
      name="basic"
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
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
  const selected = selectedStrategy || "";
  const modalTitle = (
    <div>
      <span>
        Assign a Strategy Badge to the{" "}
        <BoldStyled>${client.company}</BoldStyled> Account
      </span>
      <Note1Grey>
        {`Select a strategy and fill out a gameplan to improve and strenghten
        your realtionship with ${client.company}`}
      </Note1Grey>
    </div>
  );
  const renderBages = badgeNames.map((badge) => {
    return StrategyIcons[badge]("grey")
  })

  return (
    <Modal
      visible={isNewStrategyModal}
      title={modalTitle}
      onCancel={() => handleToggle(false)}
      footer={[
        <Button key="back" onClick={() => handleToggle(false)}>
          Cancel
        </Button>,
      ]}
      width={800}
    >
      <Flex>
        <div style={{ paddingRight: 30, width: 180 }}>
          {renderBages}
          {/* <Badge strategy={selectedStrategy} /> */}
        </div>
        <Divider type={"vertical"} />
        {renderForm}
      </Flex>
    </Modal>
  );
};

ClientDetailsNewStrategy.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default ClientDetailsNewStrategy;
