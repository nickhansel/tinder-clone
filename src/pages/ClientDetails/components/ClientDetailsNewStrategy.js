import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Modal, Row, Form, Input, Button, Divider, Col, message } from "antd";
import {
  TextInfo,
  Flex,
  BoldStyled,
  Note1Grey,
  Note2,
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
// const tailLayout = {
//   wrapperCol: { offset: 0, span: 22 },
// };

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
        label="Note"
        name="strategy_note"
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
  const iconContainerStyle = {
    fontSize: 12,
    margin: 8,
    width: "max-content",
  };
  // currently selected badge would keep it's color
  const renderBages = badgeNames.map((badgeName, index) => {
    const badgeColor = selected !== badgeName ? mainColors.grey3 : false;

    return (
      <Col key={index} onClick={() => handleStrategyClick(badgeName)} style={{ textAlign: "center"}}>
        <div style={iconContainerStyle}>  
          {selected ? StrategyIcons[badgeName](badgeColor) : null}
        </div>
        <Note2>{selected ? STRATEGY_MESSAGES[badgeName]["title"] : null}</Note2>
      </Col>
    );
  });
  const renderStrategyMessage = (
    <TextInfo style={{ padding: "14px 0px 0px 14px" }}>
      {selected ? STRATEGY_MESSAGES[selected]["message"](company) : null}
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
          style={{ 
            backgroundColor: "#FFFF",
            borderRadius: 8,
            border: "1px solid #14709F",
            color: "#14709F",
            width: 100 }}
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
            marginLeft: 164,
            width: 100,
          }}
          onClick={() => handleToggle(false)}
        >
          Confirm
        </Button>,
      ]}
    >
      <Flex>
        <Row>
          <Col style={{ width: 240}}>
            <Row
              style={{
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              {renderBages}
            </Row>
            <Row>
              {renderStrategyMessage}
            </Row>
          </Col>
          <Divider
            type="vertical"
            style={{
              height: 350,
            }}
          />
          <Col style={{ }}>{renderForm}</Col>
        </Row>
      </Flex>
    </Modal>
  );
};

ClientDetailsNewStrategy.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default ClientDetailsNewStrategy;
