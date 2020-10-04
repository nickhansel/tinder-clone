import React from "react";
import { Modal } from "antd";
import { Note } from "common";

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
      <Note
        authorName={"Blake"}
        note={{
          text:
            "Alex is not getting full use out of our platform and seems confused by certain features. I will make a point to reach out weekly with tips and strateges relevent to AirNinja’s needs to provide more tangible value.",
          title: "Extra Attention",
        }}
        deleteNote={() => console.log("delete")}
      />
    </Modal>
  );
};

export default DashboardClientModal;
