import React, { useState } from 'react';
import { Progress } from 'antd';
import { Note1Grey, Note1, SubH2, Flex, SpaceBetween, Badge } from 'common';
import { BADGES, mainColors, mintGreen } from 'utils';
import { ButtonCharts } from './styles';
import { METRICS_STATE } from '../constants';

const InsightsStrategy = ({ overallData }) => {
  const [stateWins, setState] = useState(false);

  const handleToggleAssigned = () => {
    setState(false);
  };
  const handleToggleWins = () => {
    setState(true);
  };

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

  function getBadges(strategyData, badgeDict) {
    let totalBadges = 0;

    for (let i = 0; i < strategyData.length; i++) {
      for (let j = 0; j < strategyData[i].strategy.items.length; j++) {
        const { badgeName } = strategyData[i].strategy.items[j];

        if (badgeName === BADGES.ATTENTION) {
          totalBadges += 1;
          badgeDict[0].score += 1;
        } else if (
          badgeName === BADGES.CONTACT
        ) {
          totalBadges += 1;
          badgeDict[1].score += 1;
        } else if (
          badgeName === BADGES.FEATURE
        ) {
          totalBadges += 1;
          badgeDict[2].score += 1;
        } else if (badgeName === BADGES.BUG) {
          totalBadges += 1;
          badgeDict[3].score += 1;
        } else if (
          badgeName === BADGES.ESCALATION
        ) {
          totalBadges += 1;
          badgeDict[4].score += 1;
        } else if (
          badgeName === BADGES.CUSTOM
        ) {
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

  let newBadgeDict = getBadges(overallData.listClients.items, currentBadges);

  const winsBadges = [
    {
      name: BADGES.ATTENTION,
      title: 'Attention',
      score: 10,
      percent: 50,
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
      score: 13,
      percent: 18,
    },
    {
      name: BADGES.BUG,
      title: 'Bug',
      score: 16,
      percent: 25,
    },
    {
      name: BADGES.ESCALATION,
      title: 'Escalation',
      score: 1,
      percent: 3,
    },
    {
      name: BADGES.CUSTOM,
      title: 'Custom',
      score: 2,
      percent: 6,
    },
  ];

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
    data = winsBadges;
  }

  const renderMetrics = data.map((badge) => (
    <SpaceBetween style={{ paddingBottom: 20 }}>
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
          <ButtonCharts onClick={handleToggleAssigned}>Assigned</ButtonCharts>
          <ButtonCharts onClick={handleToggleWins}>Wins</ButtonCharts>
        </div>
      </SpaceBetween>
      <Note1Grey {...titleProps}>{title}</Note1Grey>
      {renderMetrics}
    </div>
  );
};

export default InsightsStrategy;