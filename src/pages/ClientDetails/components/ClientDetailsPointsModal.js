import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Modal } from "antd";
import { selectPointsModal } from "../selectors";

const ClientDetailsPointsModal = ({ handleToggle, content }) => {
  const isPointsModal = useSelector(selectPointsModal());

  const contentProps = {
    style: {
      overflow: "auto",
      height: 420,
    },
  };

  return (
    <Modal
      visible={isPointsModal}
      title="Client Touch Points"
      onCancel={() => handleToggle(false, null)}
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
