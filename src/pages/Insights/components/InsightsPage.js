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
import InsightsQuater from './InsightsQuater';
import InsightsStrategy from './InsightsStrategy';
import {
  Layout,
  ClientCard,
  CardWrap,
  CardContainer,
  Flex,
  SubH2,
} from 'common';
import { StyledSmileIcon } from './styles';
import { iconSmile, iconSmileDown } from 'media/svg';
import { mockData, clientNames, CURRENT_USER } from 'utils';
import { PAGE_TITLE } from '../constants';
import './styles.css';

const InsightsPage = () => {
  const { loading, data, error } = useQuery(gql(listClientsDash), {
    filter: {
      contactId: CURRENT_USER,
    },
  });
  let history = useHistory();

  const clientTop = mockData[3];
  const clientLow = mockData[2];

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

  return (
    <Layout {...layoutProps}>
      <Row justify="center">
        <CardWrap height={453}
          className="insights-overall">
          <InsightsOverallScore />
        </CardWrap>
        <div style={{ marginBottom: 15 }}>
          {HigherScoreHeader}
          <ClientCard onNameClick={handleCardClick}
            {...clientTop} />
        </div>
        <div style={{ marginBottom: 15 }}>
          {LowestScoreHeader}
          <ClientCard onNameClick={handleCardClick}
            {...clientLow} />
        </div>
        <CardContainer height={440}
          width={335}
          className="strategy-metrica">
          <InsightsStrategy />
        </CardContainer>
        <CardWrap height={440}
          className="insights-moods">
          <InsightsMood clients={clientNames} />
        </CardWrap>
        <CardContainer heigth={328}
          width={400}
          className="quater-moods">
          <InsightsQuater />
        </CardContainer>
      </Row>
    </Layout>
  );
};

export default InsightsPage;
