import React, { useState } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { createClientRating } from 'graphql/mutations';
import { Modal } from 'antd';
import { ButtonConfirm, ButtonCancel, Text } from 'common';
import Rater from './Rater';
import { FlexRate, FlexRateWord, TextArea, RateModalTitle } from './styles';
import { generateId } from 'utils';
import './styles.css';

const BUTTON_WIDTH = 140;

const DashboardRateModal = ({
  isRateModal,
  handleToggle,
  clientName,
  clientId,
  history,
  userId,
}) => {
  const [value, setValue ] = useState(0);
  const [addClientRating] = useMutation(gql(createClientRating));
  
  const handleFinish = () => {
    addClientRating({
      variables: {
        input: {
          id: generateId(),
          clientRatingClientIdId: clientId,
          clientRatingOwnerIdId: userId,
          score: value,
        },
      },
    });

    history.push(`clients/${clientId}`);
    handleToggle(false);
  };

  const textProps = {
    style: { color: '#4F4F4F' },
  };

  return (
    <Modal
      visible={isRateModal}
      title={<RateModalTitle>How was your last conversation with {clientName}?</RateModalTitle>}
      className="modal__rate"
      bodyStyle={{ height: 310 }}
      width={682}
      closable={false}
      footer={[
        <ButtonCancel 
          key={1}
          style={{ width: BUTTON_WIDTH }}
          onClick={handleFinish}>
          Skip
        </ButtonCancel>,
        <ButtonConfirm
          key={2}
          style={{ marginLeft: 20, width: BUTTON_WIDTH }}
          onClick={handleFinish}
        >
          Send Rating
        </ButtonConfirm>,
      ]}
    >
      <div>
        <div>
          <FlexRate>
            <Rater value={value}
              setValue={setValue} />
            <FlexRateWord>
              <Text {...textProps}>Very bad</Text>
              <Text {...textProps}>Very good</Text>
            </FlexRateWord>
          </FlexRate>
        </div>
        <form>
          <TextArea>
            <textarea placeholder="Add a note about your last meeting"></textarea>
          </TextArea>
        </form>
      </div>
    </Modal>
  );
};

DashboardRateModal.propTypes = {
  isRateModal: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  clientName: PropTypes.string,
  clientId: PropTypes.string,
  history: PropTypes.object,
};

export default DashboardRateModal;
