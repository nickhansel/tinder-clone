import React from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { createClientNote } from "graphql/mutations";
import { listClientNotesDetails } from "graphql/queries";
import { Modal, Form, Input, Button, message } from "antd";
import { generateId } from "utils";
import "./styles.css";
import { FlexNewNoteForm } from "./styles";

const { TextArea } = Input;

const ClientDetailsNewNote = ({
  isNewNoteModal,
  handleToggle,
  client: {
    id,
    accountId: { name: companyName },
    contactId,
  },
}) => {
  const [addClientNote, { loading: creating, error }] = useMutation(
    gql(createClientNote),
    {
      update(cache, { data: { createClientNote } }) {
        const data = cache.readQuery({
          query: gql(listClientNotesDetails),
          valiables: {
            id,
          },
        });
        const { items } = data.listClientNotes;

        cache.writeQuery({
          query: gql(listClientNotesDetails),
          data: {
            listClientNotes: {
              __typename: "ClientNotes",
              items: [createClientNote].concat(items),
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
      className="input__newnote"
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
        name="note_content"
        rules={[{ required: true, message: "Please note text" }]}
      >
        <TextArea />
      </Form.Item>
    </Form>
  );

  return (
    <Modal
      visible={isNewNoteModal}
      title="Add Note"
      width={700}
      className="modal__newnote"
      onCancel={() => handleToggle()}
      footer={[
        <Button
          style={{
            marginBottom: 20,
            backgroundColor: "#FFFF",
            borderRadius: 8,
            border: "1px solid #14709F",
            color: "#14709F",
            width: 100,
          }}
          key="back"
          onClick={() => handleToggle()}
        >
          Cancel
        </Button>,
        <Button
          form="form-new-note"
          key="submit"
          htmlType="submit"
          type="primary"
          style={{
            backgroundColor: "#14709F",
            borderRadius: 8,
            marginBottom: 20,
            width: 100,
          }}
        >
          Save
      </Button>
      ]}
    >
      <FlexNewNoteForm>{renderForm}</FlexNewNoteForm>
    </Modal>
  );
};

ClientDetailsNewNote.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default ClientDetailsNewNote;
