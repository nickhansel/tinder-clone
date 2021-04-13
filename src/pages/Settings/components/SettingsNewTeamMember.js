import React from 'react';
import PropTypes from 'prop-types';
// import gql from 'graphql-tag';
// import { useMutation, useQuery } from '@apollo/react-hooks';
// import { createClientNote } from 'graphql/mutations';
// import { getClient } from 'graphql/queries';
import { Form, Input, Button, message } from 'antd';
// import { generateId } from 'utils';
import { ButtonCancel, ButtonConfirm } from 'common';
import './styles.css';

const SettingsNewTeamMember = () => {
  const [form] = Form.useForm();

  // const [addClientNote, { loading: creating, error }] = useMutation(
  //   gql(createClientNote),
  //   {
  //     update(cache, { data: { createClientNote } }) {
  //       const { items } = client.noteId;

  //       cache.writeQuery({
  //         query: gql(getClient),
  //         data: {
  //           __typename: 'Client',
  //           getClient: {
  //             ...client,
  //             noteId: {
  //               items: [createClientNote].concat(items),
  //             },
  //           },
  //         },
  //       });
  //     },
  //   }
  // );

  const handleNewTeamMemberSubmit = (values) => {
    // addClientNote({
    //   variables: {
    //     input: {
    //       id: generateId(),
    //       clientNoteClientIdId: id,
    //       clientNoteOwnerIdId: contactId.id,
    //       title: values.title,
    //       content: values.note_content,
    //     },
    //   },
    // });

    message.success('Note created, but not to backend');
    form.resetFields();
    // handleToggle();
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const formStyle = {
    labelCol: { span: 4 },
    wrapperCol: { span: 24, offset: 0 }
  };

  const footerFormStyle = {
    wrapperCol: { span: 20, offset: 6 }
  };

  return (
    <Form
      id='form-new-team-member'
      {...formStyle}
      form={form}
      name='new-team-member'
      className='settings-new-team-member-form'
      initialValues={{ remember: true }}
      onFinish={handleNewTeamMemberSubmit}
      onFinishFailed={onFinishFailed}
      style={{ marginTop: 30, marginRight: 30 }}>
      <Form.Item
        label='Username'
        name='username'
        rules={[
          { required: true, message: 'Please Input New Team Member Username' },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        label='Email'
        name='email'
        rules={[
          {
            required: true,
            type: 'email',
            message: 'Please Input A Valid New Team Member Email Address',
          },
        ]}>
        <Input />
      </Form.Item>

      <Form.Item {...footerFormStyle}>
        <ButtonConfirm
          form='form-new-team-member'
          key='submit'
          htmlType='submit'
          type='primary'>
					Confirm
        </ButtonConfirm>
        <ButtonCancel
          key='back'
          onClick={() => form.resetFields()}
          style={{ marginLeft: 150, marginTop: 20 }}>
					Reset
        </ButtonCancel>
      </Form.Item>
    </Form>
  );
};

SettingsNewTeamMember.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default SettingsNewTeamMember;
