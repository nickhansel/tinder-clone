import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import {
  createTeam as createTeamMutation,
  linkUserTeam as linkUserTeamMutation
} from 'graphql/mutations';
import { Form, Input, message } from 'antd';
import { ButtonConfirm, SpaceEnd, Loading } from 'common';
import createTeamAction from '../actions/createTeamAction';
import './styles.css';


const formStyle = {
  wrapperCol: { span: 14, offset: 0 },
  layout: 'vertical'
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 14 },
};

const ConnectionForm = ({ user }) => {
  const [form] = Form.useForm();

  const [createTeam, { loading }] = useMutation(
    gql(createTeamMutation));
  const [linkUserTeam, { loading: loadingLink }] = useMutation(
    gql(linkUserTeamMutation));
  
  // Business logic
  const handleSubmit = (values) => {
    createTeamAction(values, createTeam, user.id, linkUserTeam);  // TODO: change to hitting the Lambda function 
   

    message.success('Connected team created');
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo); // TODO: output error message
  };

  // spinner
  if (loading || loadingLink) {
    return (
      <div style={{ marginTop: 80 }}>
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <Form
        id="form-new-team"
        {...formStyle}
        form={form}
        name="basic"
        className="form__new_team"
        initialValues={{ remember: true }}
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
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <SpaceEnd>
            <ButtonConfirm
              form="form-new-team"
              key="submit"
              htmlType="submit"
              type="primary" >
                Confirm
            </ButtonConfirm>
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
