import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "antd";
import { Flex } from "common";
import { css } from "styled-components";
import { iconStar } from "media/svg";
import { ImageRate, FlexRate } from "./styles";

const DashboardRateModal = ({
  isRateModal,
  handleToggle,
}) => {
  return (
    <Modal
      visible={isRateModal}
      title="How was your last conversation with Alex?"
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
          <Flex style={{ justifyContent: "space-around" }} >
            <div>Very bad</div>
            <div>Very good</div>
          </Flex>
        </div>
        <form>
          <textarea placeholder="Add a note about your last meeting"></textarea>
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
