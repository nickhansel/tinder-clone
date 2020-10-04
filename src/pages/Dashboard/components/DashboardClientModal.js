import React from "react";
import { Modal } from "antd";
import { Note } from "common";

const DashboardClientModal = ({
  data,
  selectedClientId,
  handleToggle,
  isBadgeModal,
}) => {
  const selectedClient = selectedClientId
    ? data.filter((item) => item.id === selectedClientId)
    : false;
  const renderNotes = selectedClient
    ? selectedClient[0].strategy.map((item) => {
        return (
          <Note
            type={"strategy"}
            authorName={"Blake"}
            note={item}
            deleteNote={() => console.log("delete")}
          />
        );
      })
    : null;

  return (
    <Modal
      visible={isBadgeModal}
      title="Notes"
      onCancel={() => handleToggle(false, null)}
      footer={[]}
    >
      {renderNotes}
    </Modal>
  );
};

export default DashboardClientModal;
