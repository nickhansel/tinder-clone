import React from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";
import { ButtonConfirm, ButtonCancel, H4, Text } from "common";
import Rater from "./Rater";
import { FlexRate, FlexRateWord, TextArea } from "./styles";
import "./styles.css";

const BUTTON_WIDTH = 140;

const DashboardRateModal = ({
  isRateModal,
  handleToggle,
  clientName,
  clientId,
  history,
}) => {
  const handleFinish = () => {
    history.push(`clients/${clientId}`);
    handleToggle(false);
  };

  const textProps = {
    style: { color: "#4F4F4F" },
  };

  return (
    <Modal
      visible={isRateModal}
      title={<H4>How was your last conversation with {clientName}?</H4>}
      className="modal__rate"
      bodyStyle={{ height: 310 }}
      width={682}
      closable={false}
      footer={[
        <ButtonCancel style={{ width: BUTTON_WIDTH }} onClick={handleFinish}>
          Skip
        </ButtonCancel>,
        <ButtonConfirm
          style={{ marginLeft: 20, width: BUTTON_WIDTH }}
          key="back"
          onClick={handleFinish}
        >
          Send Rating
        </ButtonConfirm>,
      ]}
    >
      <div>
        <div>
          <FlexRate>
            <Rater />
          </FlexRate>
          <FlexRateWord>
            <Text {...textProps}>Very bad</Text>
            <Text {...textProps}>Very good</Text>
          </FlexRateWord>
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
};

export default DashboardRateModal;
