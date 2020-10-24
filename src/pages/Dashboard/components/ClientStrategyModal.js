import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { listClientStrategys } from "graphql/queries";
import { Modal, Divider } from "antd";
import { Note } from "common";

const ClientStrategyModal = ({
  selectedClientId,
  handleToggle,
  isBadgeModal,
}) => {
  console.log("selectedClientId");
  console.log(selectedClientId);
  const { loading, data, error } = useQuery(gql(listClientStrategys), {
    filter: {
      clientId: selectedClientId,
    },
  });

  const isLoading = loading || error;
  const clientStrategys = !isLoading ? data.listStrategys.items : [];
  console.log("data client");
  console.log(data);

  const renderNotes = clientStrategys.map((item) => {
    return (
      <div style={{ marginTop: 15 }}>
        <Note
          height={95}
          type="strategy"
          authorName={item.ownerId.name}
          note={item}
          deleteNote={() => console.log("delete")}
        />
        <Divider />
      </div>
    );
  });

  return (
    <Modal
      className="modal-client-startegys"
      visible={isBadgeModal}
      title="Notes"
      onCancel={() => handleToggle(false, null)}
      footer={[]}
    >
      {renderNotes}
    </Modal>
  );
};

export default ClientStrategyModal;
