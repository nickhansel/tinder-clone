import React from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { createClientNote } from "graphql/mutations";
import { getClient } from "graphql/queries";
import { Modal, Form, Input, Button, message } from "antd";
import { generateId } from "utils";
import { ButtonCancel, ButtonConfirm } from "common";
import "./styles.css";

const { TextArea } = Input;

const ClientDetailsNewNote = ({ isNewNoteModal, handleToggle, client }) => {
  const {
    id,
    accountId: { name: companyName },
    contactId,
  } = client;
  const [form] = Form.useForm();

  const [addClientNote, { loading: creating, error }] = useMutation(
    gql(createClientNote),
    {
      update(cache, { data: { createClientNote } }) {
        const { items } = client.noteId;

        cache.writeQuery({
          query: gql(getClient),
          data: {
            __typename: "Client",
            getClient: {
              ...client,
              noteId: {
                items: [createClientNote].concat(items),
              },
            },
          },
        });
      },
    }
  );

  const onFinish = (values) => {
    addClientNote({
      variables: {
        input: {
          id: generateId(),
          clientNoteClientIdId: id,
          clientNoteOwnerIdId: contactId.id,
          title: values.title,
          content: values.note_content,
        },
      },
    });

    message.success("Note created");
    form.resetFields();
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
      form={form}
      layout="vertical"
      name="basic"
      wrapperCol={{ span: 24, offset: 0 }}
      className="form__newnote"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input note title" }]}
        colon={false}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Note"
        name="note_content"
        rules={[{ required: true, message: "Please note text" }]}
        colon={false}
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
      className="modal__newnote"
      width={644}
      onCancel={() => handleToggle(false)}
      footer={[
        <ButtonCancel
          key="back"
          onClick={() => handleToggle(false)}
        >
          Cancel
        </ButtonCancel>,
        <ButtonConfirm
          form="form-new-note"
          key="submit"
          htmlType="submit"
          type="primary"
        >
          Confirm
        </ButtonConfirm>
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
