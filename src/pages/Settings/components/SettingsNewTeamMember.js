import React from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/react-hooks';
// import { createClientNote, updateTeam, createTeam } from 'graphql/mutations';
// import { getClient, getTeam, listTeams } from 'graphql/queries';
import { Form, Input, Switch, message } from 'antd';
import { generateId } from 'utils';
import gql from 'graphql-tag';
import { createUser as createUserMutation } from 'graphql/mutations';
import { ButtonCancel, ButtonConfirm, SpaceBetween } from 'common';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { loggedInUserId } from 'cache.js';
import './styles.css';

const SettingsNewTeamMember = ({ handleToggle }) => {
  const [form] = Form.useForm();
  // TODO: add team logic
  // const [createUser, { loading: creatingUser }] = useMutation(
  //   gql(createUserMutation), { 
  //     refetchQueries: [{
  //       query: gql(getUser),
  //       variables: { id: authUserData ? authUserData.id : '' },
  //     }]
  //   });

  const handleSubmit = (values) => {
    message.success('User created');
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
      name='newMember'
      className='settings-new-team-member-form'
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
      style={{ marginTop: 20, marginRight: 30 }}>
      <Form.Item
        label='Username'
        name='username'
        rules={[
          {
            required: true,
            type: 'username',
            message: 'Please input a username',
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        label='Password'
        name='password'
        rules={[
          {
            required: true,
            type: 'password',
            message: 'Please input a password',
          },
        ]}>
        <Input  />
      </Form.Item>
      <Form.Item
        label='Email'
        name='email'
        rules={[
          {
            required: true,
            type: 'email',
            message: 'Please input a valid email',
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
            onClick={() => handleToggle(true)}>
						Cancel
          </ButtonCancel>
          <ButtonConfirm
            form='form-new-team-member'
            key='submit'
            htmlType='submit'
            type='primary'
            onClick={handleSubmit}
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
