import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import {
  createTeam as createTeamMutation,
  linkUserTeam as linkUserTeamMutation
} from 'graphql/mutations';
import { Form, Input, message } from 'antd';
import { ButtonConfirm, ButtonCancel, SpaceEnd, Loading } from 'common';
import createTeamAction from '../actions/createTeamAction';
import './styles.css';


const formStyle = {
  layout: 'vertical'
};
// const tailLayout = {
//   wrapperCol: { offset: 0, span: 14 },
// };

const ConnectionForm = ({ user, toggleEdit, isEdit }) => {
  const [form] = Form.useForm();

  const [createTeam, { loading }] = useMutation(
    gql(createTeamMutation));
  const [linkUserTeam, { loading: loadingLink }] = useMutation(
    gql(linkUserTeamMutation));
  
  // Business logic
  const handleSubmit = (values) => {
    createTeamAction(values, createTeam, user.id, linkUserTeam);  // TODO: change to hitting the Lambda function 
   
    message.success('Connection created');
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo); // TODO: output error message
  };
  const handleCancel = () => {
    toggleEdit(false);
    form.resetFields();
  };


  // spinner
  if (loading || loadingLink) {
    return (
      <div style={{ marginTop: 80 }}>
        <Loading />
      </div>
    );
  }

  const connectValues = {};
  
  if (isEdit) {
    connectValues.username = user?.team?.sfUsername;
    connectValues.token = user?.team?.sfKey;
    connectValues.password = user?.team?.sfKey;
  }

  return (
    <div>
      <Form
        id="form-new-team"
        {...formStyle}
        form={form}
        name="basic"
        className="form__new_team"
        initialValues={{ 
          remember: true,
          teamName: user?.team?.name,
          ...connectValues
        }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Team Name"
          name="teamName"
          rules={[{ required: true, message: 'Please input team name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Salesforce Username"
          name="username"
          rules={[{ required: true, message: 'Please input salesforce username' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Token"
          name="token"
          rules={[{ required: true, message: 'Please input salesforce token' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input salesforce password' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <SpaceEnd>
            <ButtonConfirm
              style={{ marginRight: 20 }}
              form="form-new-team"
              key="submit"
              htmlType="submit"
              type="primary" >
                Confirm
            </ButtonConfirm>
            <ButtonCancel
              onClick={() => handleCancel()}
              key="back" >
                Cancel
            </ButtonCancel>
          </SpaceEnd>
        </Form.Item>
      </Form>
    </div>
  );
};

ConnectionForm.propTypes = {
  user: PropTypes.object,
};

export default ConnectionForm;
