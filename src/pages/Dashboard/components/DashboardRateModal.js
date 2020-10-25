import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "antd";
import { Flex } from "common";
import { css } from "styled-components";
import { iconStar } from "media/svg";
import { ImageRate, FlexRate, FlexRateWord, TextArea } from "./styles";
import "./styles.css";

const DashboardRateModal = ({
  isRateModal,
  handleToggle,
}) => {
  return (
    <Modal
      visible={isRateModal}
      title="How was your last conversation with Alex?"
      className="modal__title"
      width={772}
      closable={false}
      onCancel={() => handleToggle(false)}
      footer={[
        <Button onClick={() => handleToggle(false)}>
          Skip
        </Button>,
        <Button key="back" onClick={() => handleToggle(false)}>
          Send Rating
        </Button>,
      ]}
    >
      <div>
        <div>
          <FlexRate>
            <div>
              <img src={iconStar} alt="Star" />
              <img src={iconStar} alt="Star" />
              <img src={iconStar} alt="Star" />
              <img src={iconStar} alt="Star" />
              <img src={iconStar} alt="Star" />
            </div>
          </FlexRate>
          <FlexRateWord>
            <div>Very bad</div>
            <div>Very good</div>
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
