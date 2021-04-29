/*
  Client Page
*/
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { getClient } from 'graphql/queries';

import { Row, Pagination, Tooltip } from 'antd';

import ClientDetailsNewNote from './ClientDetailsNewNote';
import ClientDetailsNewStrategy from './ClientDetailsNewStrategy';
import ClientDetailsNotesList from './ClientDetailsNotesList';
import ClientProfile from './ClientDetailsProfile';
import ClientDetailsTouchPoints from './ClientDetailsTouchPoints';
import ClientDetailsToolbox from './ClientDetailsToolbox';
import { Note2, H3, CardWrap, Loading } from 'common';
import Layout from 'pages/Layout';

import { RowPagination } from './styles';
import { iconBack, iconAddCircle } from 'media/svg';
import './styles.css';
import { touchPointsMock, getIdFromLocation } from 'utils';

const NOTES_EACH_PAGE = 4;

const ClientDetailsPage = ({ history, location }) => {
  const selectedClient = getIdFromLocation(location);
  // console.log(location);
  // console.log(selectedClient);

  const { loading, data, error } = useQuery(gql(getClient), {
    variables: {
      id: selectedClient,
    },
  });

  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(NOTES_EACH_PAGE);
  const [page, setPage] = useState(1);
  const [isNewNoteModal, toggleNewNoteModal] = useState(false);
  const [isNewStrategyModal, toggleNewStrategyModal] = useState(false);
  const [selectedStrategy, setSelectedStrategy] = useState(null);

  // Get client from db in future
  const [touchPoints, setPoints] = useState(touchPointsMock);

  if (loading) {
    return (
      <Layout>
        <div style={{ marginTop: 200 }}>
          <Loading />
        </div>
      </Layout>
    );
  }

  const isLoaded = !loading && !error;
  const clientData = isLoaded && data ? data.getClient : {};
  const {
    accountId,
    name,
    contactId,
    noteId: { items: notesData },
  } = clientData;
  const totalNotes = 0 || notesData.length;

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
      notesData: notesData,
      minVal,
      maxVal,
      authorName: contactId ? contactId.name : '',
    };
    const paginationProps = {
      current: page,
      defaultCurrent: 1,
      onChange: onPageChange,
      pageSize: NOTES_EACH_PAGE,
      showTotal: (total) => <Note2>Total {totalNotes} notes</Note2>,
      total: totalNotes,
    };

    console.log(clientData.isDecisionMaker);

    return (
      <>
        <Row {...rowProps}>
          <Row {...rowProps}>
            <CardWrap className='details-card details-profile'>
              <ClientProfile {...clientData} />
            </CardWrap>
            <CardWrap height={320}
              className='details-card details-touch'>
              <ClientDetailsTouchPoints
                authorName={contactId ? contactId.name : ''}
                touchPoints={touchPoints}
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
          isNewNoteModal={isNewNoteModal}
          handleToggle={() => toggleNewNoteModal(false)}
        />
        <ClientDetailsNewStrategy
          client={clientData}
          selectedStrategy={selectedStrategy}
          setSelectedStrategy={setSelectedStrategy}
          isNewStrategyModal={isNewStrategyModal}
          handleToggle={() => toggleNewStrategyModal(false)}
        />
      </>
    );
  };

  return (
    <Layout {...layoutProps}>
      <DndProvider backend={HTML5Backend}>{renderContent()}</DndProvider>
    </Layout>
  );
};

export default ClientDetailsPage;
