import React from "react";
import { Modal } from "antd";

const DashboardClientModal = ({
  selectedClientId,
  handleToggle,
  isBadgeModal,
}) => {
  return (
    <Modal
      visible={isBadgeModal}
      title="Notes"
      onCancel={() => handleToggle(false, null)}
      footer={[]}
    >
      <span>selected client {selectedClientId}</span>
      <p>Note contents...</p>
    </Modal>
  );
};

export default DashboardClientModal;
