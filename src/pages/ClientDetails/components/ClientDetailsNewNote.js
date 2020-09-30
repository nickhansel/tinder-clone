import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, Input, Button, message } from "antd";
import { selectNewNoteModal } from "../selectors";
import { createNote } from "../reducers/clientDetailsSlice";

const { TextArea } = Input;

const ClientDetailsNewNote = ({ handleToggle }) => {
  const isNewNoteModal = useSelector(selectNewNoteModal());
  const dispatch = useDispatch();

  const onFinish = (values) => {
    values.id = Date.now();
    values.createdAt = Date.now();

    dispatch(createNote(values));
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
        <Button key="back" onClick={handleToggle}>
          Cancel
        </Button>,
      ]}
    >
      <div>{renderForm}</div>
    </Modal>
  );
};

ClientDetailsNewNote.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default ClientDetailsNewNote;
