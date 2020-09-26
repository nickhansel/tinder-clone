import React from "react";
import { Form, Input, Col } from "antd";
import { ButtonPrimaryGreenSm, StyledInput } from "./styles";

const LandingEmailForm = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    // save to db
    form.resetFields();
  };

  return (
    <Col span={12} style={{ marginTop: 40, width: "100%" }}>
      <StyledInput>
        <h2>Want to Learn More?!</h2>
        <div>
          <Form onFinish={handleSubmit} form={form}>
            <Form.Item name="email" style={{ marginBottom: 0 }}>
              <Input
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
