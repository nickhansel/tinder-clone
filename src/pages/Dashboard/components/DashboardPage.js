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
import { Pagination } from 'antd';
import DashboardClientList from './DashboardClientList';
import MoodFilter from './DashboardMoodFilter';
import DashboardSort from './DashboardSort';
import { Layout, Note2, Loading } from 'common';
import { DASHBOARD_TITLE, NUM_EACH_PAGE } from '../constants';
import { FlexContainer } from './styles';
import { filterDataByMood, CURRENT_USER } from 'utils';
import SearchInput from 'common/components/Layout/SearchInput';
import './styles.css';

const DashboardPage = ({ history }) => {
  const [moodId, setMoodId] = useState('all');
  const [filtering, setFiltering] = useState(false);
  const [page, setPage] = useState(1);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(NUM_EACH_PAGE);
  const [authUserData, setAuthUserData] = useState({});
  const [searchString, setSearchString] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // get user from out db
  const { data: userData } = useQuery(gql(getUser), {
    variables: { id: authUserData.id },
  });

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
          }
        })
        .catch((err) => console.log('error: ', err));
    }
  });

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
      teamId: userData && userData.team ? userData.team.id : CURRENT_USER
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
  let clientsData = isLoaded // TODO change to API filtering
    ? filterDataByMood(data.listClients.items, moodId)
    : [];
  const totalClients = clientsData.length;
  // console.log(clientsData);
  const moodFilter = (
    <MoodFilter setMoodId={setMoodId}
      setFiltering={setFiltering} />
  );

  const onChange = (page) => {
    // Pagination
    setPage(page);
    setMinVal((page - 1) * NUM_EACH_PAGE);
    setMaxVal(page * NUM_EACH_PAGE);
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
    pageSize: 8,
    showTotal: (total) => <Note2>Total {totalClients} clients</Note2>,
    total: totalClients,
  };

  const handleChange = (event) => {
    setSearchString(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    setSearchResults(searchString);
  });

  const renderClients = filtering ? (
    <div style={{ marginTop: 200 }}>
      <Loading />
    </div>
  ) : (
    <DashboardClientList {...cardListProps} />
  );

  return (
    <Layout title={DASHBOARD_TITLE}
      extra={moodFilter}>
      <FlexContainer>
        <DashboardSort />
        <Pagination {...paginationProps} />
      </FlexContainer>
      <SearchInput 
        value={searchString}
        onChange={handleChange}
        onPressEnter={handleSubmit}/>
      <h1>{searchString}</h1>
      <h1>{searchResults}</h1>
      {renderClients}
    </Layout>
  );
};

DashboardPage.propTypes = {
  history: PropTypes.object
};

export default DashboardPage;
