/*
  Settigns Connection Card
*/
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ConnectionForm from './ConnectionForm';
import { ActionHeader, Flex, Note1Grey, Loading } from 'common';
import SyncClients from './SyncClients';

const ConnectionCard = ({ 
  sfConnected = true,
  userData
}) => {
  const [loading, setIsLoading] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [clientsTotal, setClientsTotal] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [sfConnected]);

  const editAction = () => {
    setIsEdit(true);
    // TODO: add action
    console.log('action');
  };
  const deleteAction = () => {
    // TODO: add action
    console.log('action');
  };

  const headerActions = [
    {
      name: 'edit',
      action: editAction,
      processing: editAction,
    },
    {
      name: 'delete',
      action: deleteAction,
      processing: deleteAction,
    },
  ];
  const clientsMessage = clientsTotal ? `Total Clients: ${clientsTotal}` : '';

  const connectionCreated = (
    <div style={{ marginTop: 10 }}>
      <Flex style={{ color: '#052f7b' }}>You can Sync Clients now  -&gt; &nbsp;&nbsp;  
        <SyncClients userData={userData} setClientsTotal={setClientsTotal} />
      </Flex>
      <div style={{ marginTop: 15 }}>
        <Note1Grey>Connection created</Note1Grey>
        <Note1Grey>Salesforce Username: {userData?.team?.sfUsername} </Note1Grey>
        <Note1Grey>{clientsMessage}</Note1Grey>
      </div>
    </div>
  );

  let renderContent =  null;

  if (sfConnected && !isEdit) {
    renderContent = connectionCreated;
  } else {
    renderContent = (
      <ConnectionForm 
        user={userData}
        toggleEdit={setIsEdit}
        isEdit={isEdit} />
    );
  }

  if (loading) return  <Loading/>;

  return (
    <div style={{width: 540}}>
      <ActionHeader title="Salesforce Connection"
        actions={headerActions} />
      {renderContent}
    </div>
  );
};

ConnectionCard.propTypes = {
  sfConnected: PropTypes.bool,
  userData: PropTypes.object,
};

export default ConnectionCard;
