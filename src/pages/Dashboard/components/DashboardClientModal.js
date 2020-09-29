import React from "react";
import { useSelector } from "react-redux";
import { Modal } from "antd";
import { selectBadgeModal, selectClient } from "../selectors";

const DashboardClientModal = ({ handleToggle }) => {
  const isModalOpen = useSelector(selectBadgeModal());
  const selectedClientId = useSelector(selectClient());

  return (
    <Modal
      visible={isModalOpen}
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
