/*
  Client List component
 */

import React, { useState } from "react";
import { Row } from "antd";
import { ClientCard } from "common";
import DashboardClientModal from "./DashboardClientModal";
import DashboardRateModal from "./DashboardRateModal";

const DashboardClientList = ({ data, minVal, maxVal, history }) => {
  const [isBadgeModal, toggleBadgeModal] = useState(false);
  const [isRateModal, toggleRateModal] = useState(false);
  const [selectedClientId, setSelectedClient] = useState(null);

  const handleCardClick = (clientId) => {
    history.push(`clients/${clientId}`);
  };
  const handleBadgeToggle = (state, id) => {
    toggleBadgeModal(state);
    setSelectedClient(id);
  };
  const handleRateToggle = (state) => {
    toggleRateModal(state);
  }

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
                avatarAction={handleRateToggle}
                cardAction={handleCardClick}
                infoAction={handleBadgeToggle}
              />
            ))}
      </Row>
      <DashboardRateModal
        handleToggle={handleRateToggle}
        isRateModal={isRateModal}
      />
      <DashboardClientModal
        data={data}
        handleToggle={handleBadgeToggle}
        isBadgeModal={isBadgeModal}
        selectedClientId={selectedClientId}
      />
    </>
  );
};

export default DashboardClientList;
