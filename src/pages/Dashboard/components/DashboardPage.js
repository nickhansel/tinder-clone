/* eslint-disable react/display-name */
/*
  Dashboard Page 
*/

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Auth } from 'aws-amplify';

import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { getUser } from 'graphql/queries';
import { createUser as createUserMutation } from 'graphql/mutations';

import DashboardClients from './DashboardClients';
import MoodFilter from './DashboardMoodFilter';
import { Loading } from 'common';
import Layout from 'pages/Layout';

import { DASHBOARD_TITLE } from '../constants';
import { loggedInUserId, currentUser } from '../../../cache.js';
import './styles.css';

const DashboardPage = ({ history }) => {
  const [moodId, setMoodId] = useState('all');
  const [filtering, setFiltering] = useState(false);
  const [authUserData, setAuthUserData] = useState({});

  // get user from our db
  const { data: userData } = useQuery(gql(getUser), {
    variables: { id: authUserData.id },
  });
  console.log({here: authUserData.id })
  console.log({here: userData})
  // Query to create user in db if registered for a first time
  const [createUser, { loading }] = useMutation(
    gql(createUserMutation), { 
      refetchQueries: [{
        query: gql(getUser),
        variables: { id: authUserData ? authUserData.id : '' },
      }]
    });

  useEffect(() => {
    if (authUserData != null && !authUserData.id) {
      Auth.currentUserInfo()
        .then((data) => {
          if (data) {
            setAuthUserData(data);
            currentUser({...data});
            loggedInUserId(data.id);
          }
        })
        .catch((err) => console.log('error: ', err));
    }
  }, []);

  useEffect(() => {
    if (userData && userData.getUser === null) {
      createUser({
        variables: {
          input: {
            id: authUserData.id,
            name: authUserData.username,
            email: authUserData.attributes.email
          },
        },
      });
    }
  }, [userData]);

  if (!userData) {
    return (
      <Layout>
        <div style={{ marginTop: 200 }}>
          <Loading />
        </div>
      </Layout>
    );
  }

  const moodFilter = (
    <MoodFilter setMoodId={setMoodId}
      setFiltering={setFiltering} />
  );
  return (
    <Layout title={DASHBOARD_TITLE}
      extra={moodFilter}>
      <DashboardClients 
        history={history}
        filtering={filtering}
        userData={userData}
        moodId={moodId}
        userLoading={loading}
      />
    </Layout>
  );
};

DashboardPage.propTypes = {
  history: PropTypes.object
};

export default DashboardPage;
