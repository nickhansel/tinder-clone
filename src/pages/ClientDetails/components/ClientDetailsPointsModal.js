import React from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";

const ClientDetailsPointsModal = ({ isOpen, handleToggle, content }) => {
  const contentProps = {
    style: {
      overflow: "auto",
      height: 420,
    },
  };

  return (
    <Modal
      visible={isOpen}
      title="Client Touch Points"
      onCancel={() => handleToggle(false)}
      footer={[]}
    >
      <div {...contentProps}>{content}</div>
    </Modal>
  );
};

ClientDetailsPointsModal.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default ClientDetailsPointsModal;
