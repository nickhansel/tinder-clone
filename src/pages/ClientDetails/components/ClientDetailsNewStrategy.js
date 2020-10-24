import React, { useEffect } from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { createStrategy } from "graphql/mutations";
import { getClient } from "graphql/queries";
import { Modal, Row, Form, Input, Button, Divider, Col, message } from "antd";
import {
  TextInfo,
  Flex,
  BoldStyled,
  Note1Grey,
  Note2,
  StrategyIcons,
} from "common";
import { BADGES, mainColors, generateId } from "utils";
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
  client: {
    id,
    accountId: { name: companyName },
    contactId,
  },
  selectedStrategy,
  setSelectedStrategy,
  isNewStrategyModal,
  handleToggle,
}) => {
  const [addStrategy, { loading: creating, error }] = useMutation(
    gql(createStrategy),
    {
      update(cache, { data: { createStrategy } }) {
        const data = cache.readQuery({
          query: gql(getClient),
          variables: {
            id,
          },
        });
        const { items } = data.getClient.strategy;

        cache.writeQuery({
          query: gql(getClient),
          data: {
            getClient: {
              ...data.getClient,
              strategy: {
                items: items.concat([createStrategy]),
              },
            },
          },
        });
      },
    }
  );

  useEffect(() => {
    console.log(selectedStrategy);
  }, [selectedStrategy]);

  // Business logic
  const handleSubmit = (values) => {
    addStrategy({
      variables: {
        input: {
          id: generateId(),
          badgeName: selectedStrategy,
          strategyClientIdId: id,
          strategyOwnerIdId: contactId.id,
          title: values.title,
          description: values.strategy_note,
        },
      },
    });
    message.success("Strategy created");
    handleToggle(false);
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
      id="form-new-strategy"
      {...formStyle}
      name="new-strategy"
      className="details-new-strategy-form"
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
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
        Assign a Strategy Badge to the <BoldStyled>{companyName}</BoldStyled>{" "}
        Account
      </span>
      <Note1Grey>
        {`Select a strategy and fill out a gameplan to improve and strenghten
        your realtionship with ${companyName}`}
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
      <Col
        key={index}
        onClick={() => handleStrategyClick(badgeName)}
        style={{ textAlign: "center" }}
      >
        <div style={iconContainerStyle}>
          {selected ? StrategyIcons[badgeName](badgeColor) : null}
        </div>
        <Note2>{selected ? STRATEGY_MESSAGES[badgeName]["title"] : null}</Note2>
      </Col>
    );
  });
  const renderStrategyMessage = (
    <TextInfo style={{ padding: "14px 0px 0px 14px" }}>
      {selected ? STRATEGY_MESSAGES[selected]["message"](companyName) : null}
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
            width: 100,
          }}
          key="back"
          onClick={() => handleToggle(false)}
        >
          Cancel
        </Button>,
        <Button
          form="form-new-strategy"
          key="submit"
          htmlType="submit"
          type="primary"
          style={{
            backgroundColor: "#14709F",
            borderRadius: 8,
            marginLeft: 164,
            width: 100,
          }}
        >
          Confirm
        </Button>,
      ]}
    >
      <Flex>
        <Row>
          <Col style={{ width: 240 }}>
            <Row
              style={{
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              {renderBages}
            </Row>
            <Row>{renderStrategyMessage}</Row>
          </Col>
          <Divider
            type="vertical"
            style={{
              height: 350,
            }}
          />
          <Col style={{}}>{renderForm}</Col>
        </Row>
      </Flex>
    </Modal>
  );
};

ClientDetailsNewStrategy.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default ClientDetailsNewStrategy;
