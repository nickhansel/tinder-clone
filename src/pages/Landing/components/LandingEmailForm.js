import React from 'react';
import { createSubscribe as createSubscribeMutation } from 'graphql/mutations';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Form, Input, Col } from 'antd';
import createSubscribtionAction from '../actions/createSubscribtion';
// Styled Components
import { ButtonPrimaryGreenSm, StyledInput } from './styles';

const LandingEmailForm = () => {
  const [form] = Form.useForm();
  const [createSubscribe, { loading, error }] = useMutation(
    gql(createSubscribeMutation)
  );

  const handleSubmit = (values) => {
    createSubscribtionAction(createSubscribe, values);
    form.resetFields();
  };

  return (
    <Col span={12}
      style={{ marginTop: 40, width: '100%' }}>
      <StyledInput>
        <h2>Want to Learn More?!</h2>
        <div>
          <Form onFinish={handleSubmit}
            form={form}>
            <Form.Item
              validateStatus={loading}
              name="email"
              style={{ marginBottom: 0 }}
            >
              <Input
                required
                type="email"
                placeholder="Enter your email"
                suffix={
                  <ButtonPrimaryGreenSm htmlType="submit">
                    Sign Up
                  </ButtonPrimaryGreenSm>
                }
              />
            </Form.Item>
          </Form>
        </div>
      </StyledInput>
    </Col>
  );
};

export default LandingEmailForm;
