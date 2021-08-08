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

const CONNECTION_URL = 'https://zqlo9kka34.execute-api.us-east-2.amazonaws.com/default/SF-API';

const SyncClients = ({ userData }) => {
  const [ accountId, setAccountId ] = useState(null);
  const [ clientId, setClientId ] = useState(null);
  const [ sfData, setSfData ] = useState([]);

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
                salutation: item.Salutation,
                avatarId: item.Salutation === 'Mr'? 'curiousBoy' : 'curiousGirl',
                lastContact: item.LastActivityDate,
                clientContactId: userData.id
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

  async function getData(sfUsername, sfKey, query) {
    console.log(`${CONNECTION_URL}?sfUsername=${sfUsername}&sfKey=${sfKey}&query=${query}`)
    const data = await fetch(`${CONNECTION_URL}?sfUsername=${sfUsername}&sfKey=${sfKey}&query=${query}`);


    console.log('----');
    console.log(data.respose);
    console.log(data.json());

    return data.json();
  }

  function handleSyncClick() {
    if (sfConnected) {
      const { sfUsername, sfKey } = userData.team;
      const dd = getData(sfUsername, sfKey, '*, Account.*');
      console.log(dd);
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
