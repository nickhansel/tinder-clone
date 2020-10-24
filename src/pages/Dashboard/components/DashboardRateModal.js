import React from "react";
import PropTypes from "prop-types";
import { Modal, Button  } from "antd";

const DashboardRateModal = ({
  isRateModal,
  handleToggle,
}) => {
  return (
    <Modal
      visible={isRateModal}
      title=""
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
      <div>Add your content here</div>
    </Modal>
  );
};

DashboardRateModal.propTypes = {
  isRateModal: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

export default DashboardRateModal;
