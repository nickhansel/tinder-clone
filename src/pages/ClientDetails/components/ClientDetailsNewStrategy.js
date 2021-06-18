import React  from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { createStrategy } from 'graphql/mutations';
import { getClient } from 'graphql/queries';
import { Modal, Row, Form, Input, Divider, Col, message } from 'antd';
import {
  TextInfo,
  Flex,
  BoldStyled,
  Note1Grey,
  Note2,
  StrategyIcons,
  ButtonConfirm,
  ButtonCancel,
} from 'common';
import { BADGES, mainColors, generateId } from 'utils';
import { STRATEGY_MESSAGES } from '../constants';
import { loggedInUserId } from '../../../cache';

const { TextArea } = Input;
const badgeNames = Object.values(BADGES);

// Styles
const formStyle = {
  labelCol: { span: 8 },
  wrapperCol: { span: 22 },
  layout: 'vertical',
};

const ClientDetailsNewStrategy = ({
  client: {
    id,
    accountId: { name: companyName },
  },
  selectedStrategy,
  setSelectedStrategy,
  isNewStrategyModal,
  handleToggle,
}) => {
  const [form] = Form.useForm();

  const [addStrategy, { loading: creating, error }] = useMutation(
    gql(createStrategy),
    {
      update(cache, { data: { createStrategy } }) {
        const data = cache.readQuery({
          query: gql(getClient),
          variables: {
            id,
          },
        });
        const { items } = data.getClient.strategy;
        const newItems = [...items, createStrategy];
        delete data.getClient.strategy;

        cache.writeQuery({
          query: gql(getClient),
          variables: {
            id,
          },
          data: {
            getClient: {
              __typename: 'Client',
              ...data.getClient,
              strategy: {
                __typename: 'Strategy',
                items: newItems,
                nextToken: null
              },
            },
          },
        });
      },
    }
  );

  // Business logic
  const handleSubmit = (values) => {
    addStrategy({
      variables: {
        input: {
          id: generateId(),
          badgeName: selectedStrategy,
          strategyClientIdId: id,
          strategyOwnerIdId: loggedInUserId(),
          title: values.title,
          description: values.description,
          status: 'assigned',
        },
      },
    });

    if (!creating && !error) {
      message.success('Strategy created');
    } else if (!creating && error) {
      message.error(error);
    }

    form.resetFields();
    handleToggle(false);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const handleStrategyClick = (strategyName) => {
    setSelectedStrategy(strategyName);
  };

  // Render components
  const renderForm = (
    <Form
      id="form-new-strategy"
      {...formStyle}
      form={form}
      name="new-strategy"
      className="details-new-strategy-form"
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: 'Please input strategy title' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Please strategy description' }]}
      >
        <TextArea />
      </Form.Item>
    </Form>
  );

  const selected = selectedStrategy || '';
  const modalTitle = (
    <div>
      <span>
        Assign a Strategy Badge to the <BoldStyled>{companyName}</BoldStyled>{' '}
        Account
      </span>
      <Note1Grey>
        {`Select a strategy and fill out a gameplan to improve and strengthen
        your relationship with ${companyName}`}
      </Note1Grey>
    </div>
  );
  const iconContainerStyle = {
    fontSize: 12,
    margin: 8,
    width: 'max-content',
  };
  // currently selected badge would keep it's color
  const renderBages = badgeNames.map((badgeName, index) => {
    const badgeColor = selected !== badgeName ? mainColors.grey3 : false;

    return (
      <Col
        key={index}
        onClick={() => handleStrategyClick(badgeName)}
        style={{ textAlign: 'center' }}
      >
        <div style={iconContainerStyle}>
          {selected ? StrategyIcons[badgeName](badgeColor) : null}
        </div>
        <Note2>{selected ? STRATEGY_MESSAGES[badgeName]['title'] : null}</Note2>
      </Col>
    );
  });
  const renderStrategyMessage = (
    <TextInfo style={{ padding: '14px 0px 0px 14px' }}>
      {selected ? STRATEGY_MESSAGES[selected]['message'](companyName) : null}
    </TextInfo>
  );

  return (
    <Modal
      bodyStyle={{ height: 340 }}
      className="new-strategy-modal"
      width={800}
      visible={isNewStrategyModal}
      title={modalTitle}
      onCancel={() => handleToggle(false)}
      footer={[
        <ButtonCancel key="back"
          onClick={() => handleToggle(false)}>
          Cancel
        </ButtonCancel>,
        <ButtonConfirm
          form="form-new-strategy"
          key="submit"
          htmlType="submit"
          type="primary"
          style={{ marginLeft: 140 }}
        >
          Confirm
        </ButtonConfirm>,
      ]}
    >
      <Flex>
        <Row>
          <Col style={{ width: 240 }}>
            <Row
              style={{
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
              }}
            >
              {renderBages}
            </Row>
            <Row>{renderStrategyMessage}</Row>
          </Col>
          <Divider
            type="vertical"
            style={{
              height: 350,
            }}
          />
          <Col style={{}}>{renderForm}</Col>
        </Row>
      </Flex>
    </Modal>
  );
};

ClientDetailsNewStrategy.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  id: PropTypes.string,
  companyName: PropTypes.string,
  client: PropTypes.object,
  contactId: PropTypes.string,
  selectedStrategy: PropTypes.string,
  setSelectedStrategy: PropTypes.func.isRequired,
  isNewStrategyModal: PropTypes.bool,
};

export default ClientDetailsNewStrategy;
