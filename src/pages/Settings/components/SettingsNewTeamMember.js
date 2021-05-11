import React from 'react';
import PropTypes from 'prop-types';
// import gql from 'graphql-tag';
// import { useMutation, useQuery } from '@apollo/react-hooks';
// import { createClientNote, updateTeam, createTeam } from 'graphql/mutations';
// import { getClient, getTeam, listTeams } from 'graphql/queries';
import { Form, Input, Switch, message } from 'antd';
// import { generateId } from 'utils';
import { ButtonCancel, ButtonConfirm, SpaceBetween } from 'common';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import './styles.css';

const SettingsNewTeamMember = ( props ) => {
  // console.log(props.handleToggleExisting);
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

  const handleNewTeamMemberSubmit = (e) => {
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
    console.log(e.firstName);
    console.log(e.lastName);
    console.log(e.email);
    // the value is null if it is just left off so it should check for null and false
    console.log(e.admin);

    message.success('Note created, but not to backend');
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const formStyle = {
    labelCol: { span: 4 },
    wrapperCol: { span: 24, offset: 0 },
  };

  const footerFormStyle = {
    wrapperCol: { span: 20, offset: 6 },
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
      style={{ marginTop: 20, marginRight: 30 }}>
      <Form.Item label='Full Name'
        style={{ marginBottom: 0 }}>
        <Form.Item
          name='firstName'
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50% - 5px)' }}>
          <Input placeholder='Input First Name' />
        </Form.Item>
        <Form.Item
          name='lastName'
          rules={[{ required: true }]}
          style={{
            display: 'inline-block',
            width: 'calc(50% - 5px)',
            marginLeft: '8px',
          }}>
          <Input placeholder='Input Last Name' />
        </Form.Item>
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
      <Form.Item label='Admin'
        name='admin'>
        <Switch
          checkedChildren={<CheckOutlined />}
          unCheckedChildren={<CloseOutlined />}
        />
      </Form.Item>
      <Form.Item {...footerFormStyle}>
        <SpaceBetween>
          <ButtonCancel key='back'
            onClick={() => props.handleToggle(true)}>
						Cancel
          </ButtonCancel>
          <ButtonConfirm
            form='form-new-team-member'
            key='submit'
            htmlType='submit'
            type='primary'
            // onClick={handleNewTeamMemberSubmit}
            style={{ marginRight: 40 }}>
						Confirm
          </ButtonConfirm>
        </SpaceBetween>
      </Form.Item>
    </Form>
  );
};

SettingsNewTeamMember.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default SettingsNewTeamMember;
