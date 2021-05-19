/*
  Client List component
 */

import React, { useState } from 'react';
import { Row } from 'antd';
import { ClientCard } from 'common';
import ClientStrategyModal from './ClientStrategyModal';
import DashboardRateModal from './DashboardRateModal';

const DashboardClientList = ({ data, minVal, maxVal, history }) => {
  const [isBadgeModal, toggleBadgeModal] = useState(false);
  const [isRateModal, toggleRateModal] = useState(false);
  const [selectedClientId, setSelectedClient] = useState(null);
  const [selectedClientName, setSelectedClientName] = useState(null);

  const handleBadgeToggle = (state, id) => {
    toggleBadgeModal(state);
    setSelectedClient(id);
  };
  const handleRateToggle = (id, clientName) => {
    setSelectedClientName(clientName);
    setSelectedClient(id);
    toggleRateModal(true);
  };
  
  return (
    <>
      <Row justify="center">
        {data.length > 0 &&
            data
              .slice(minVal, maxVal)
              .map((client, index) => (
                <ClientCard
                  key={index}
                  {...client}
                  onNameClick={handleRateToggle}
                  onBadgeClick={handleBadgeToggle}
                />
              ))}
      </Row>
      <DashboardRateModal
        clientName={selectedClientName}
        clientId={selectedClientId}
        history={history}
        handleToggle={handleRateToggle}
        isRateModal={isRateModal}
      />
      <ClientStrategyModal
        data={data}
        handleToggle={handleBadgeToggle}
        isBadgeModal={isBadgeModal}
        selectedClientId={selectedClientId}
        showWins={false}
      />
    </>
  );
};

export default DashboardClientList;
