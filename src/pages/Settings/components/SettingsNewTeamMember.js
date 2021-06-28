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

const SettingsNewTeamMember = ({ handleToggle }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
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
      name='newMember'
      className='settings-new-team-member-form'
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
      style={{ marginTop: 20, marginRight: 30 }}>
      <Form.Item label='Full Name'
        style={{ marginBottom: 0 }}>
        <Form.Item
          name='firstName'
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: 'calc(50% - 5px)' }}>
          <Input placeholder='Input first name' />
        </Form.Item>
        <Form.Item
          name='lastName'
          rules={[{ required: true }]}
          style={{
            display: 'inline-block',
            width: 'calc(50% - 5px)',
            marginLeft: '8px',
          }}>
          <Input placeholder='Input last name' />
        </Form.Item>
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
