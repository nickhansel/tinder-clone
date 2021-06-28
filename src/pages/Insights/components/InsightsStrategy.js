import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'antd';
import { Note1Grey, Note1, SubH2, Flex, SpaceBetween, Badge } from 'common';
import { mainColors, mintGreen, aggregateBadges } from 'utils';
import { ButtonCharts } from './styles';

const InsightsStrategy = ({
  assignedStrategies = {},
  strategyWinData = {},
}) => {
  const [isWinsSelected, setState] = useState(false);

  const badgesAssignedMap = aggregateBadges(assignedStrategies.items); 
  const badgesWinsMap = aggregateBadges(strategyWinData.items);  

  const lineProps = {
    style: {
      lineHeight: '12px',
      marginBottom: 4,
    },
  };

  let title = 'Badges currently assigned';
  let progressColor = mainColors.brightBlue;
  let data = badgesAssignedMap;

  if (isWinsSelected) {
    title = 'Badge wins this Quarter';
    progressColor = mintGreen;
    data = badgesWinsMap;
  }

  const renderMetrics = data.map((badge) => {
    const { name, score } = badge;

    return (
      <SpaceBetween style={{ paddingBottom: 20 }}
        key={name}>
        <Flex style={{ width: 260 }}>
          <Badge strategy={name} />
          <div style={{ width: '100%' }}>
            <Note1 {...lineProps}>
              {name.replace(/^\w/, (c) => c.toUpperCase())}
            </Note1>
            <Progress
              showInfo={false}
              strokeWidth={12}
              strokeColor={progressColor}
              percent={score / data.length * 100}
            />
          </div>
        </Flex>
        <Note1>{score}</Note1>
      </SpaceBetween>
    );
  });

  // Props
  const titleProps = {
    style: {
      paddingBottom: 20,
    },
  };

  return (
    <div>
      <SpaceBetween>
        <SubH2>Strategy Based Metrics</SubH2>
        <div>
          <ButtonCharts onClick={() => setState(false)}>Assigned</ButtonCharts>
          <ButtonCharts onClick={() => setState(true)}>Wins</ButtonCharts>
        </div>
      </SpaceBetween>
      <Note1Grey {...titleProps}>{title}</Note1Grey>
      {renderMetrics}
    </div>
  );
};

InsightsStrategy.propTypes = {
  overallAssignedStrategyData: PropTypes.object,
  overallWinStrategyData: PropTypes.object,
};

export default InsightsStrategy;