/* eslint-disable react/display-name */
/*
  Dashboard Page 
*/

// react imports
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// ant design imports
import { Pagination, Button } from 'antd';

// local components
import DashboardClientList from './DashboardClientList';
import DashboardSort from './DashboardSort';
import SearchInput from 'pages/Layout/SearchInput';
import { Note2, Loading } from 'common';

// local helpers etc
import { FlexContainer } from './styles';
import { filterDataByMoodAndSearch } from 'utils';
import { loggedInUserId } from '../../../cache.js';
import { PAGE_SIZE } from '../constants';
import './styles.css';

const DashboardClients = ({ userData, filtering, moodId, userLoading, history }) => {
  const { getUser: { id: userId, clients } } = userData;
  const totalClients = clientsData?.length;
  
  // paggination configs
  const [page, setPage] = useState(1);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(8);
  const [showAllTitleText, setShowAllTitleText] = useState('Show All');

  // search input
  const [searchString, setSearchString] = useState('');

  let clientsData = !userLoading // TODO change to API filtering - filterDataByMoodAndSearch is a mock functions
    ? filterDataByMoodAndSearch(clients, moodId, searchString)
    : [];

  console.log('id ' + loggedInUserId());


  const onPaginationChange = (page) => {
    // Pagination
    setPage(page);
    setMinVal((page - 1) * PAGE_SIZE);
    setMaxVal(page * PAGE_SIZE);
  };

  const cardListProps = {
    data: clientsData,
    userId,
    history,
    minVal,
    maxVal,
  };
  
  const handleSearchChange = (event) => {
    setSearchString(event.target.value);
  };

  if (filtering || userLoading) {
    return (
      <div style={{ marginTop: 200 }}>
        <Loading />
      </div>
    );
  } 

  if (!totalClients) {
    history.push('/settings');
  }

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

  const paginationProps = {
    current: page,
    defaultCurrent: 1,
    onChange: onPaginationChange,
    pageSize: maxVal,
    showTotal: () => <Note2>Total {totalClients} clients</Note2>,
    total: totalClients,
  };

  return (
    <div>
      <FlexContainer>
        <div>
          <SearchInput value={searchString}
            onChange={handleSearchChange} />
          <DashboardSort />
        </div>
        <div>
          <Pagination {...paginationProps}
            style={{ marginRight: 10 }}/>
          {renderShowAllButton}
        </div>
      </FlexContainer>
      <DashboardClientList {...cardListProps} /> 
    </div>
  );
};

DashboardClients.propTypes = {
  userData: PropTypes.object
};

export default DashboardClients;
