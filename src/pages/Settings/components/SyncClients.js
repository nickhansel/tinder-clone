import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import { useMutation, useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  createClient as createClientMutation,
  createAccount as createAccountMutation,
} from 'graphql/mutations';
import {
  getClient,
  getAccount,
} from 'graphql/queries';
import { Loading } from 'common';
import { URL } from 'utils';
import './styles.css';

const SyncClients = ({ userData, setClientsTotal }) => {
  const [ accountId, setAccountId ] = useState(null);
  const [ clientId, setClientId ] = useState(null);
  const [ sfData, setSfData ] = useState([]);
  const [ sfLoading, setSfLoading ] = useState(false);

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
                clientContactIdId: userData.id
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
    const AUTH = `?sfUsername=${sfUsername}&sfKey=${sfKey}&query=${query}`;

    await fetch(`${URL.OBJECT}${AUTH}`).then(response => response.json()).then(data => {
      setSfLoading(false);
      setClientsTotal(data.length);
      handleCreateAccountsAndClients(data);
    });
  }

  function handleSyncClick() {
    if (sfConnected) {
      setSfLoading(true);
      const { sfUsername, sfKey } = userData.team;
      getData(sfUsername, sfKey, '*, Account.*');
    }
  };

  // spinner
  if (creatingClient || creatingAccount || loadingClient || loading || sfLoading) {
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