/* eslint-disable react/display-name */
/*
  Client Page
*/
import React, { useState, useEffect } from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { getClient, getClientStrategysEq } from 'graphql/queries';
import { Row, Pagination, Tooltip } from 'antd';

import ClientDetailsNewNote from './ClientDetailsNewNote';
import ClientDetailsNewStrategy from './ClientDetailsNewStrategy';
import ClientDetailsNotesList from './ClientDetailsNotesList';
import ClientProfile from './ClientDetailsProfile';
import ClientDetailsTouchPoints from './ClientDetailsTouchPoints';
import ClientDetailsToolbox from './ClientDetailsToolbox';
import Layout from 'pages/Layout';
import { Note2, H3, CardWrap, Loading } from 'common';

import { RowPagination } from './styles';
import { iconBack, iconAddCircle } from 'media/svg';
import './styles.css';
import { getIdFromLocation, sortByDate } from 'utils';

const NOTES_EACH_PAGE = 4;

const ClientDetailsPage = ({ location }) => {
  const selectedClient = getIdFromLocation(location);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(NOTES_EACH_PAGE);
  const [page, setPage] = useState(1);
  const [isNewNoteModal, toggleNewNoteModal] = useState(false);
  const [isNewStrategyModal, toggleNewStrategyModal] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState(null);
  const [clientData, setClientData] = useState({});
  const [notesData, setClientNotes] = useState({});

  const { data, loading, error: errorAssigned } = useQuery(
    gql(getClientStrategysEq(`"assigned"`)), {
      variables: { id: selectedClient },
    }
  );
  
  useEffect(() => {
    console.log(data)
    if (!errorAssigned && data) {
      setClientData(data.getClient);
    }
  }, [data]);

  useEffect(() => {
    if (clientData?.noteId) {
      setClientNotes(clientData.noteId);
    }
  }, [clientData]);

  if (loading) {
    return (
      <Layout>
        <div style={{ marginTop: 200 }}>
          <Loading />
        </div>
      </Layout>
    );
  }

  const {
    accountId,
    name,
    contactId,
  } = clientData;
  const totalNotes = 0 || notesData.items?.length;

  // Props
  const layoutProps = {
    title: accountId ? (
      <span>
        <b style={{ color: '#0E3860' }}>{accountId.name}</b> - {name}
      </span>
    ) : (
      ''
    ),
    prefix: <img src={iconBack}
      alt='' />,
  };

  const renderContent = () => {
    const onPageChange = (page) => {
      // Pagination
      setPage(page);
      setMinVal((page - 1) * NOTES_EACH_PAGE);
      setMaxVal(page * NOTES_EACH_PAGE);
    };

    const noteProps = {
      height: 200,
      className: 'details-note',
    };
    const rowProps = {
      justify: 'center',
    };
    const noteListProps = {
      noteProps,
      selectedClient,
      client: clientData,
      setClientData,
      notesData: sortByDate(notesData?.items),
      minVal,
      maxVal,
      authorName: contactId ? contactId.name : '',
    };
    const paginationProps = {
      current: page,
      defaultCurrent: 1,
      onChange: onPageChange,
      pageSize: NOTES_EACH_PAGE,
      showTotal: () => <Note2>Total {totalNotes} notes</Note2>,
      total: totalNotes,
    };

    return (
      <>
        <Row {...rowProps}>
          <Row {...rowProps}>
            <CardWrap className='details-card details-profile'>
              <ClientProfile
                setClientData={setClientData}
                selectedClient={selectedClient}
                assignedStrategies={clientData?.strategy?.items || []}
                clientData={clientData} />
            </CardWrap>
            <CardWrap height={320}
              className='details-card details-touch'>
              <ClientDetailsTouchPoints
                authorName={contactId ? contactId.name : ''}
                client={clientData}
              />
            </CardWrap>
            <CardWrap className='details-card details-toolbox'>
              <ClientDetailsToolbox
                setSelectedStrategy={setSelectedStrategy}
                handleToggle={() => toggleNewStrategyModal(true)}
              />
            </CardWrap>
          </Row>
          <RowPagination className='details-pagination'>
            <H3>
							Notes{' '}
              <Tooltip title='Add Note'>
                <img
                  onClick={() => toggleNewNoteModal(true)}
                  style={{ cursor: 'pointer' }}
                  src={iconAddCircle}
                  alt='add note'
                />
              </Tooltip>
            </H3>
            <Pagination {...paginationProps} />
          </RowPagination>
          <Row {...rowProps}>
            <ClientDetailsNotesList {...noteListProps} />
          </Row>
        </Row>
        <ClientDetailsNewNote
          client={clientData}
          setClientData={setClientData}
          isNewNoteModal={isNewNoteModal}
          handleToggle={() => toggleNewNoteModal(false)}
        />
        <ClientDetailsNewStrategy
          client={clientData}
          setClientData={setClientData}
          selectedStrategy={selectedStrategy}
          assignedStrategies={clientData?.strategy?.items || []}
          setSelectedStrategy={setSelectedStrategy}
          isNewStrategyModal={isNewStrategyModal}
          handleToggle={() => toggleNewStrategyModal(false)}
        />
      </>
    );
  };

  return (
    <Layout {...layoutProps}>
      {renderContent()}
    </Layout>
  );
};

export default ClientDetailsPage;
