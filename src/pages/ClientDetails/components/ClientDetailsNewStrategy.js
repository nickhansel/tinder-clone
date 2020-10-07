import React from "react";
import PropTypes from "prop-types";
import { Modal, Form, Input, Button, message } from "antd";

const { TextArea } = Input;

const ClientDetailsNewStrategy = ({
  isNewNoteModal,
  handleToggle,
  handleToggle,
}) => {
  const onFinish = (values) => {
    values.id = Date.now();
    values.createdAt = Date.now();

    // TODO Create Note
    message.success("Note created");
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

  return (
    <Modal
      visible={isNewNoteModal}
      title="Add Note"
      onCancel={() => handleToggle(false)}
      footer={[
        <Button key="back" onClick={() => handleToggle(false)}>
          Cancel
        </Button>,
      ]}
    >
      <div>New strategy</div>
    </Modal>
  );
};

ClientDetailsNewStrategy.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default ClientDetailsNewStrategy;
