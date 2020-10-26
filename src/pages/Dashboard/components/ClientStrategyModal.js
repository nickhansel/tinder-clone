import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { getClient } from "graphql/queries";
import { Modal, Divider } from "antd";
import { Note, Loading } from "common";

const ClientStrategyModal = ({
  selectedClientId,
  handleToggle,
  isBadgeModal,
}) => {
  const { loading, data, error } = useQuery(gql(getClient), {
    variables: { id: selectedClientId },
  });
  console.log("selectedClientId");
  console.log(selectedClientId);
  const isLoading = loading || error;
  const clientStrategys =
    !isLoading && data.getClient ? data.getClient.strategy.items : [];

  const renderNotes = loading ? (
    <Loading />
  ) : (
    clientStrategys.map((item) => {
      return (
        <div style={{ marginTop: 15 }}>
          <Note
            height={95}
            type="strategy"
            authorName={data.getClient.name}
            note={item}
            deleteNote={() => console.log("delete")}
          />
          <Divider />
        </div>
      );
    })
  );

  return (
    <Modal
      className="modal__client-startegys"
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
