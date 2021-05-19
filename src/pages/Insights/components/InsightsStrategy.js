import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Progress } from 'antd';
import { Note1Grey, Note1, SubH2, Flex, SpaceBetween, Badge } from 'common';
import { BADGES, mainColors, mintGreen } from 'utils';
import { ButtonCharts } from './styles';

const InsightsStrategy = ({
  overallAssignedStrategyData,
  overallWinStrategyData,
}) => {
  const [stateWins, setState] = useState(false);

  // TODO add db data
  const currentBadges = [
    {
      name: BADGES.ATTENTION,
      title: 'Attention',
      score: 0,
      percent: 0,
    },
    {
      name: BADGES.CONTACT,
      title: 'New Contact',
      score: 0,
      percent: 0,
    },
    {
      name: BADGES.FEATURE,
      title: 'New Feature',
      score: 0,
      percent: 0,
    },
    {
      name: BADGES.BUG,
      title: 'Bug',
      score: 0,
      percent: 0,
    },
    {
      name: BADGES.ESCALATION,
      title: 'Escalation',
      score: 0,
      percent: 0,
    },
    {
      name: BADGES.CUSTOM,
      title: 'Custom',
      score: 0,
      percent: 0,
    },
  ];

  const winsBadges = JSON.parse(JSON.stringify(currentBadges));

  function getBadges(strategyData, badgeDict) {
    let totalBadges = 0;
    for (let i = 0; i < strategyData.listStrategys.items.length; i++) {
      if (strategyData.listStrategys.items[i].clientId != null) {
        const { badgeName } = strategyData.listStrategys.items[i];
        if (badgeName === BADGES.ATTENTION) {
          totalBadges += 1;
          badgeDict[0].score += 1;
        } else if (badgeName === BADGES.CONTACT) {
          totalBadges += 1;
          badgeDict[1].score += 1;
        } else if (badgeName === BADGES.FEATURE) {
          totalBadges += 1;
          badgeDict[2].score += 1;
        } else if (badgeName === BADGES.BUG) {
          totalBadges += 1;
          badgeDict[3].score += 1;
        } else if (badgeName === BADGES.ESCALATION) {
          totalBadges += 1;
          badgeDict[4].score += 1;
        } else if (badgeName === BADGES.CUSTOM) {
          totalBadges += 1;
          badgeDict[5].score += 1;
        }
      }
    }
    badgeDict.forEach((element) => {
      element.percent = (element.score / totalBadges) * 100;
    });
    return badgeDict;
  }

  let newBadgeDict = getBadges(
    overallAssignedStrategyData,
    currentBadges,
  );

  let newWinBadgeDict = getBadges(
    overallWinStrategyData,
    winsBadges,
  );

  const lineProps = {
    style: {
      lineHeight: '12px',
      marginBottom: 4,
    },
  };

  let title = 'Badges currently assigned';
  let progressColor = mainColors.brightBlue;
  let data = newBadgeDict;

  if (stateWins) {
    title = 'Badge wins this Quarter';
    progressColor = mintGreen;
    data = newWinBadgeDict;
  }

  const renderMetrics = data.map((badge) => (
    <SpaceBetween style={{ paddingBottom: 20 }}
      key={badge.name}>
      <Flex style={{ width: 260 }}>
        <Badge strategy={badge.name} />
        <div style={{ width: '100%' }}>
          <Note1 {...lineProps}>{badge.title}</Note1>
          <Progress
            showInfo={false}
            strokeWidth={12}
            strokeColor={progressColor}
            percent={badge.percent}
          />
        </div>
      </Flex>
      <Note1>{badge.score}</Note1>
    </SpaceBetween>
  ));

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