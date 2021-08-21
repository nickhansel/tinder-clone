import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useMutation} from '@apollo/react-hooks';
import { createClientNote } from 'graphql/mutations';
import { getClient } from 'graphql/queries';
import { Modal, Form, Input, message } from 'antd';
import { generateId } from 'utils';
import { ButtonCancel, ButtonConfirm } from 'common';
import './styles.css';

const { TextArea } = Input;

const ClientDetailsNewNote = ({ isNewNoteModal, handleToggle, client , setClientData}) => {
  const { id, contactId } = client;
  const [form] = Form.useForm();

  const [addClientNote] = useMutation(gql(createClientNote));

  const handleNewNoteSubmit = (values) => {
    const newNote = {
      id: generateId(),
      clientNoteClientIdId: id,
      clientNoteOwnerIdId: contactId.id,
      title: values.title,
      content: values.note_content,
    };
    addClientNote({
      variables: {
        input: {...newNote},
      },
    });

    const notes = client.noteId?.items;
    const updatedClient = {
      ...client,
      noteId: {
        items: [...notes, newNote]
      }
    };
    console.log({updatedClient});
    setClientData(updatedClient);
    message.success('Note created');
    form.resetFields();
    handleToggle();
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const formStyle = {
    wrapperCol: { span: 24, offset: 0 },
    layout: 'vertical'
  };

  const renderForm = (
    <Form
      id="form-new-note"
      {...formStyle}
      form={form}
      name="basic"
      className="form__newnote"
      initialValues={{ remember: true }}
      onFinish={handleNewNoteSubmit}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Please input note title' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Note"
        name="note_content"
        rules={[{ required: true, message: 'Please note text' }]}
      >
        <TextArea />
      </Form.Item>
    </Form>
  );

  return (
    <Modal
      visible={isNewNoteModal}
      title="Add Note"
      className="modal__newnote"
      width={644}
      onCancel={() => handleToggle()}
      footer={[
        <ButtonCancel
          key="back"
          onClick={() => handleToggle()}
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
