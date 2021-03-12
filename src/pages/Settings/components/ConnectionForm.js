import React from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { createTeam } from "graphql/mutations";
import { getClient } from "graphql/queries";
import { Form, Input, message } from "antd";
import { generateId } from "utils";
import { ButtonConfirm, SpaceEnd } from "common";
import "./styles.css";

const ConnectionForm = ({ user }) => {
  const [form] = Form.useForm();

  const [addTeamConnection, { loading: creating, error }] = useMutation(
    gql(createTeam),
    {
      // update(cache, { data: { createTeam } }) {
      //   const { items } = client.noteId;

      //   cache.writeQuery({
      //     query: gql(getClient),
      //     data: {
      //       __typename: "Client",
      //       getClient: {
      //         ...client,
      //         noteId: {
      //           items: [createTeam].concat(items),
      //         },
      //       },
      //     },
      //   });
      // },
    }
  );

  const handleSubmit = (values) => {
    addTeamConnection({
      variables: {
        input: {
          id: generateId(),
          name: values.name,
          sfKey: values.token,
          sfUsername: values.username
        },
      },
    });

    message.success("Connected team created");
    form.resetFields();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const formStyle = {
    wrapperCol: { span: 14, offset: 0, paddingTop: 20 },
    layout: "vertical"
  };
  const tailLayout = {
    wrapperCol: { offset: 0, span: 14 },
  };

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
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input team name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input salesforce username" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Token"
          name="token"
          rules={[{ required: true, message: "Please input salesforce token" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input salesforce password" }]}
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

// ConnectionForm.propTypes = {
//   handleToggle: PropTypes.func.isRequired,
// };

export default ConnectionForm;
