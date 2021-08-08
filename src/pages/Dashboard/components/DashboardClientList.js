/*
  Client List component
 */

import React, { useState } from 'react';
import { Row } from 'antd';
import DashboardRateModal from './DashboardRateModal';
import { Client } from '../../sharedComponents';

const DashboardClientList = ({ data, userId, minVal, maxVal, history }) => {
  const [isRateModal, toggleRateModal] = useState(false);
  const [selectedClientId, setSelectedClient] = useState(null);
  const [selectedClientName, setSelectedClientName] = useState(null);

  const handleRateToggle = (id, clientName) => {
    setSelectedClientName(clientName);
    setSelectedClient(id);
    toggleRateModal(true);
  };
  
  return (
    <>
      <Row justify="space-around"
        style={{maxWidth: 1300}}>
        {data.length &&
            data
              .slice(minVal, maxVal)
              .map((client, index) => (
                <Client
                  key={index}
                  client={client}
                  onNameClick={handleRateToggle}
                  setSelectedClient={setSelectedClient}
                />
              ))}
      </Row>
      <DashboardRateModal
        clientName={selectedClientName}
        clientId={selectedClientId}
        userId={userId}
        history={history}
        handleToggle={handleRateToggle}
        isRateModal={isRateModal}
      />
    </>
  );
};

export default DashboardClientList;
