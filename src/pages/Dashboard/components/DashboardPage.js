/* eslint-disable react/display-name */
/*
  Dashboard Page 
*/

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Auth } from 'aws-amplify';

import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { listClientsDash, getUser } from 'graphql/queries';
import { createUser as createUserMutation } from 'graphql/mutations';

import { Pagination, Button } from 'antd';

import DashboardClientList from './DashboardClientList';
import MoodFilter from './DashboardMoodFilter';
import DashboardSort from './DashboardSort';
import SearchInput from 'pages/Layout/SearchInput';
import { Note2, Loading } from 'common';
import Layout from 'pages/Layout';

import { DASHBOARD_TITLE } from '../constants';
import { FlexContainer } from './styles';
import { filterDataByMoodAndSearch } from 'utils';
import { loggedInUserId } from '../../../cache.js';
import './styles.css';

const DashboardPage = ({ history }) => {
  const [moodId, setMoodId] = useState('all');
  const [filtering, setFiltering] = useState(false);
  const [page, setPage] = useState(1);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(8);
  const [authUserData, setAuthUserData] = useState({});
  const [searchString, setSearchString] = useState('');
  const [showAllTitleText, setShowAllTitleText] = useState('Show All');

  // get user from our db
  const { data: userData } = useQuery(gql(getUser), {
    variables: { id: authUserData.id },
  });

  // Query to create user in db if registered for a first time
  const [createUser, { loading: creatingUser }] = useMutation(
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

  const { loading, data, error } = useQuery(gql(listClientsDash), {
    filter: {
      teamId: userData && userData.team ? userData.team.id : loggedInUserId()
    },
  });

  if (loading || creatingUser) {
    return (
      <Layout>
        <div style={{ marginTop: 200 }}>
          <Loading />
        </div>
      </Layout>
    );
  }

  const isLoaded = !loading && !error;
  let clientsData = isLoaded // TODO change to API filtering - filterDataByMoodAndSearch is a mock functions
    ? filterDataByMoodAndSearch(data.listClients.items, moodId, searchString)
    : [];

  const totalClients = clientsData.length;
  const moodFilter = (
    <MoodFilter setMoodId={setMoodId}
      setFiltering={setFiltering} />
  );

  const clientsPerPage = 8;
  const onChange = (page) => {
    // Pagination
    setPage(page);
    setMinVal((page - 1) * clientsPerPage);
    setMaxVal(page * clientsPerPage);
  };

  const cardListProps = {
    data: clientsData,
    history,
    minVal,
    maxVal,
  };

  const paginationProps = {
    current: page,
    defaultCurrent: 1,
    onChange: onChange,
    pageSize: maxVal,
    showTotal: () => <Note2>Total {totalClients} clients</Note2>,
    total: totalClients,
  };
  
  const handleChange = (event) => {
    setSearchString(event.target.value);
  };

  const renderClients = filtering ? (
    <div style={{ marginTop: 200 }}>
      <Loading />
    </div>
  ) : (
    <DashboardClientList {...cardListProps} />
  );

  function handleShowAllClick() {
    if (maxVal === 8) {
      setMaxVal(totalClients);
      setShowAllTitleText('Show Less');
    } else if (maxVal === totalClients) {
      setMaxVal(8);
      setShowAllTitleText('Show All');
    }
  }

  const renderShowAllButton = (
    <Button 
      onClick={handleShowAllClick}>
      {showAllTitleText}
    </Button>
  );

  return (
    <Layout title={DASHBOARD_TITLE}
      extra={moodFilter}>
      <FlexContainer>
        <div>
          <SearchInput value={searchString}
            onChange={handleChange} />
          <DashboardSort />
        </div>
        <div>
          <Pagination {...paginationProps}
            style={{ marginRight: 10 }}/>
          {renderShowAllButton}
        </div>
      </FlexContainer>
      {renderClients}
    </Layout>
  );
};

DashboardPage.propTypes = {
  history: PropTypes.object
};

export default DashboardPage;
