/*
  Client List component
 */

import React, { useState } from "react";
import { Row } from "antd";
import { ClientCard } from "common";
import DashboardClientModal from "./DashboardClientModal";

const DashboardClientList = ({ data, minVal, maxVal, history }) => {
  const [isBadgeModal, toggleBadgeModal] = useState(false);
  const [selectedClientId, setSelectedClient] = useState(null);

  const handleCardClick = (clientId) => {
    history.push(`clients/${clientId}`);
  };
  const handleToggle = (state, id) => {
    toggleBadgeModal(state);
    setSelectedClient(id);
  };

  return (
    <>
      <Row justify="center">
        {data &&
          data.length > 0 &&
          data
            .slice(minVal, maxVal)
            .map((client, index) => (
              <ClientCard
                key={index}
                {...client}
                cardAction={handleCardClick}
                infoAction={handleToggle}
              />
            ))}
      </Row>
      <DashboardClientModal
        data={data}
        isBadgeModal={isBadgeModal}
        handleToggle={handleToggle}
        selectedClientId={selectedClientId}
      />
    </>
  );
};

export default DashboardClientList;
