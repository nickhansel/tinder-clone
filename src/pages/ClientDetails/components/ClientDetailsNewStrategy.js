import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Form, Input, Button, Typography, message } from "antd";
import { Badge, Flex } from "common";

const { TextArea } = Input;
const { Paragraph } = Typography;

const ClientDetailsNewStrategy = ({
  selectedStrategy,
  isNewStrategyModal,
  handleToggle,
}) => {
  const [editableStr, setEditableStr] = useState("Enter your note..");

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

  return (
    <Modal
      visible={isNewStrategyModal}
      title={`Add New Strategy`}
      onCancel={() => handleToggle(false)}
      footer={[
        <Button key="back" onClick={() => handleToggle(false)}>
          Cancel
        </Button>,
      ]}
    >
      <Flex>
        <div style={{ paddingRight: 30 }}>
          <Badge strategy={selectedStrategy} />
        </div>
        <Paragraph editable={{ onChange: setEditableStr }}>
          {editableStr}
        </Paragraph>
      </Flex>
    </Modal>
  );
};

ClientDetailsNewStrategy.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default ClientDetailsNewStrategy;
