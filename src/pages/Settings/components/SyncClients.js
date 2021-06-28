import React, { useState } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import {  message } from 'antd';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { SyncOutlined } from '@ant-design/icons';
import {
  createClient as createClientMutation,
  createAccount as createAccountMutation,
} from 'graphql/mutations';
import {
  getClient,
  getAccount,
} from 'graphql/queries';
import {  Loading } from 'common';
import './styles.css';

const jsforce = require('jsforce');

const SyncClients = ({ userData }) => {
  const [accountId, setAccountId ] = useState(null);
  const [clientId, setClientId ] = useState(null);

  const [createClient, { loading: creatingClient }] = useMutation(
    gql(createClientMutation));
  const [createAccount, { loading: creatingAccount }] = useMutation(
    gql(createAccountMutation));
    
  const { data: account = {}, loading } = useQuery(gql(getAccount), {
    variables: { id: accountId },
  });
  const { data: client = {}, loadingClient } = useQuery(gql(getClient), {
    variables: { id: clientId },
  });
    
  const handleCreateAccountsAndClients = (data) => {
    data.forEach((item) => {
      setAccountId(item.AccountId);
      setClientId(item.Id);

      if (!loading && !account) {
        try {
          createAccount({
            variables: {
              input: {
                id: item.AccountId,
                accountTeamId: userData.team.id,
                name: item.Account.Name,
                contract: parseInt('' + item.Account.AnnualRevenue/1000),
                healthScore: 3.8,
              }
            }
          });
        } catch (e) {
          console.log(e);
        }
      }
      if (!loadingClient && !client) {
        try {
          createClient({
            variables: {
              input: {
                id: item.Id,
                clientAccountIdId: item.AccountId,
                name: item.Name,
                email: item.Email,
                position: item.Title,
                avatarId: item.Salutation === 'Mr'? 'curiousBoy' : 'curiousGirl',
                lastContact: item.LastActivityDate,
                // clientContactId: item.OwnerId
              }
            }
          });
        } catch (e) {
          console.log(e);
        }
      }
    });
    message.success('Success');
  };

  const sfConnected = userData.team ? Boolean(userData.team.sfKey) : false;

  const handleSyncClick = () => {
    if (sfConnected) {
      const { sfUsername, sfKey } = userData.team;

      // Salesforce connection test
      var conn = new jsforce.Connection();
      conn.login(sfUsername, sfKey, function(error) {
        if (error) { 
          return console.error(error); 
        }
        
        conn.sobject('Contact')
          .select('*, Account.*') // asterisk means all fields in specified level are targeted.
          .execute(function(err, records) {
            if (records) {
              handleCreateAccountsAndClients(records);
            }
          });
      });
    }
  };

  // spinner
  if (creatingClient || creatingAccount || loadingClient || loading) {
    return (
      <div style={{ marginTop: 80 }}>
        <Loading />
      </div>
    );
  }

  return (
    <div onClick={handleSyncClick}>
      <SyncOutlined className="icon-sync" />
    </div>
  );
};

SyncClients.propTypes = {
  userData: PropTypes.object
};

export default SyncClients;
