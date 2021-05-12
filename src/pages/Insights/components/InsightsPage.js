/*
  Insights Page 
*/
import React from 'react';
import { useHistory } from 'react-router-dom';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { listClientsDash } from 'graphql/queries';

import { Row } from 'antd';

import InsightsOverallScore from './InsightsOverallScore';
import InsightsMood from './InsightsMood';
import InsightsQuarter from './InsightsQuarter';
import InsightsStrategy from './InsightsStrategy';
import Layout from 'pages/Layout';
import {
  ClientCard,
  CardWrap,
  CardContainer,
  Flex,
  SubH2,
  Loading,
} from 'common';

import { StyledSmileIcon } from './styles';
import { iconSmile, iconSmileDown } from 'media/svg';
import { clientNames, CURRENT_USER, findTopBottomClients } from 'utils';
import { PAGE_TITLE } from '../constants';
import './styles.css';

const InsightsPage = () => {
  const { loading, data, error } = useQuery(gql(listClientsDash), {
    filter: {
      contactId: CURRENT_USER,
    },
  });
  let history = useHistory();

  if (loading) {
    return (
      <Layout>
        <div style={{ marginTop: 200 }}>
          <Loading />
        </div>
      </Layout>
    );
  }

  // get the Top and Bottom Client from formula in utils
  const clientTopBottom = findTopBottomClients(data.listClients.items);

  const layoutProps = {
    title: PAGE_TITLE,
  };

  const handleCardClick = (clientId) => {
    history.push(`clients/${clientId}`);
  };

  const renderCardHeader = (backgroundColor, icon, title) => {
    return (
      <Flex>
        <StyledSmileIcon style={{ backgroundColor }}>
          <img src={icon}
            alt={`icon ${title}`} />
        </StyledSmileIcon>
        <SubH2>{title}</SubH2>
      </Flex>
    );
  };

  const HigherScoreHeader = renderCardHeader(
    '#20CDAE',
    iconSmile,
    'Client with Highest Score'
  );
  const LowestScoreHeader = renderCardHeader(
    '#FD6A65',
    iconSmileDown,
    'Client with Lowest Score'
  );

  const insightOverallScoreProps = {
    overallData: data,
    totalClients: data.listClients.items.length,
  };

  const insightsStrategyProps = {
    overallData: data,
  };

  return (
    <Layout {...layoutProps}>
      <Row justify='center'>
        <CardWrap height={453}
          className='insights-overall'>
          <InsightsOverallScore {...insightOverallScoreProps} />
        </CardWrap>
        <div style={{ marginBottom: 15 }}>
          {HigherScoreHeader}
          <ClientCard onNameClick={handleCardClick}
            {...clientTopBottom[1]} />
        </div>
        <div style={{ marginBottom: 15 }}>
          {LowestScoreHeader}
          <ClientCard onNameClick={handleCardClick}
            {...clientTopBottom[0]} />
        </div>
        <CardContainer height={440}
          width={390}
          className='strategy-metrics'>
          <InsightsStrategy {...insightsStrategyProps} />
        </CardContainer>
        <CardWrap height={440}
          className='insights-moods'>
          <InsightsMood clients={clientNames} />
        </CardWrap>
        <CardContainer height={440}
          width={390}
          className='Quarter-moods'>
          <InsightsQuarter />
        </CardContainer>
      </Row>
    </Layout>
  );
};

export default InsightsPage;