/*
  Insights Page 
*/
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { listClientsDash, listStrategys } from 'graphql/queries';
import { Row, Col, Tooltip } from 'antd';
import InsightsOverallScore from './InsightsOverallScore';
import InsightsMood from './InsightsMood';
import InsightsQuarter from './InsightsQuarter';
import InsightsStrategy from './InsightsStrategy';
import InsightArchiveModal from './InsightArchiveModal';
import Layout from 'pages/Layout';
import {
  ClientCard,
  CardWrap,
  CardContainer,
  Flex,
  SubH2,
  Loading,
  SpaceBetween,
  SubH1,
} from 'common';
import { StyledSmileIcon } from './styles';
import { iconSmile, iconSmileDown } from 'media/svg';
import { clientNames, CURRENT_USER, findTopBottomClients } from 'utils';
import { PAGE_TITLE } from '../constants';
import { BadgeStyled } from '../../../common/components/styles';
import { FolderOutlined } from '@ant-design/icons';
import './styles.css';

const InsightsPage = () => {
  const { loading, data, error } = useQuery(
    gql(listClientsDash),
    {
      filter: {
        contactId: CURRENT_USER,
      },
    }
  );
  let history = useHistory();

  const [isWinModal, toggleWinModal] = useState(
    false
  );

  const {
    loading: loadingWinStrategies,
    data: strategyWinData,
  } = useQuery(gql(listStrategys), {
    variables: {
      filter: {
        status: {
          eq: 'win',
        },
      },
    },
  });

  const {
    loading: loadingCombinedStrategies,
    data: strategyCombinedData,
  } = useQuery(gql(listStrategys), {
    variables: {
      filter: {
        status: {
          ne: 'assigned',
        },
      },
    },
  });

  const {
    loading: loadingAssignedStrategies,
    data: assignedStrategies,
  } = useQuery(gql(listStrategys), {
    variables: {
      filter: {
        status: {
          eq: 'assigned',
        },
      },
    },
  });

  if (
    loading ||
		loadingWinStrategies ||
		loadingAssignedStrategies ||
		loadingCombinedStrategies
  ) {
    return (
      <Layout>
        <div style={{ marginTop: 200 }}>
          <Loading />
        </div>
      </Layout>
    );
  }

  // get the Top and Bottom Client from formula in utils
  const clientTopBottom = findTopBottomClients(
    data.listClients.items
  );

  const layoutProps = {
    title: PAGE_TITLE,
  };

  const handleCardClick = (clientId) => {
    history.push(`clients/${clientId}`);
  };

  const renderCardHeader = (
    backgroundColor,
    icon,
    title
  ) => {
    return (
      <Flex>
        <StyledSmileIcon
          style={{ backgroundColor }}>
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

  const filteredStrategyWinData = strategyWinData.listStrategys.items.filter(
    (item) => item.clientId != null
  );

  const filteredStrategyCombinedData = strategyCombinedData.listStrategys.items.filter(
    (item) => item.clientId != null
  );

  const insightsStrategyProps = {
    overallAssignedStrategyData: assignedStrategies,
    overallWinStrategyData: strategyWinData,
  };

  return loading ||
		loadingWinStrategies ||
		loadingAssignedStrategies ||
		loadingCombinedStrategies ? (
      <Layout>
        <div style={{ marginTop: 200 }}>
          <Loading />
        </div>
      </Layout>
    ) : (
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
          <Col>
            <CardContainer height={320}
              width={390}
              className='Quarter-moods'>
              <InsightsQuarter />
            </CardContainer>
            <CardContainer height={95}
              width={390}
              className='insights-moods'>
              <SpaceBetween>
                <SubH1>
								Overall Client Wins: {filteredStrategyWinData.length}
                </SubH1>
                <div style={{ float: 'right' }}>
                  <BadgeStyled
                    style={{
                      height: 32,
                      width: 32,
                      backgroundColor: '#ebebeb',
                      cursor: 'pointer',
                    }}
                    onClick={() => toggleWinModal(true)}>
                    <Tooltip title={'Archive'}>
                      <FolderOutlined alt='Archive Icon' />
                    </Tooltip>
                  </BadgeStyled>
                </div>
              </SpaceBetween>
            </CardContainer>
          </Col>
          <InsightArchiveModal
            archiveData={filteredStrategyCombinedData}
            handleToggle={toggleWinModal}
            isArchiveModal={isWinModal}
            clientName={null}
          />
        </Row>
      </Layout>
    );
};

export default InsightsPage;