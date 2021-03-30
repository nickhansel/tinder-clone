import React, { useState } from 'react';
import { Progress } from 'antd';
import { Note1Grey, Note1, SubH2, Flex, SpaceBetween, Badge } from 'common';
import { BADGES, mainColors, mintGreen } from 'utils';
import { ButtonCharts } from './styles';
import { METRICS_STATE } from '../constants';

const InsightsStrategy = () => {
  const [stateWins, setState] = useState(false);

  const handleToggle = () => {
    setState(!stateWins);
  };

  // TODO add db data
  const currentBadges = [
    {
      name: BADGES.ATTENTION,
      title: 'Attention',
      score: 13,
      percent: 60,
    },
    {
      name: BADGES.CONTACT,
      title: 'New Contact',
      score: 10,
      percent: 50,
    },
    {
      name: BADGES.FEATURE,
      title: 'New Feature',
      score: 5,
      percent: 10,
    },
    {
      name: BADGES.BUG,
      title: 'Bug',
      score: 6,
      percent: 12,
    },
    {
      name: BADGES.ESCALATION,
      title: 'Escalation',
      score: 2,
      percent: 6,
    },
    {
      name: BADGES.CUSTOM,
      title: 'Custom',
      score: 6,
      percent: 12,
    },
  ];
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

  let buttonName = METRICS_STATE.ASSIGNED;
  let title = 'Badges currently assigned';
  let progressColor = mainColors.brightBlue;
  let data = currentBadges;

  if (stateWins) {
    buttonName = METRICS_STATE.WINS;
    title = 'Badge wins this quater';
    progressColor = mintGreen;
    data = winsBadges;
  }

  const rederMetrics = data.map((badge) => (
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
        <SubH2>Strategy Based Metrica</SubH2>
        <ButtonCharts onClick={handleToggle}>{buttonName}</ButtonCharts>
      </SpaceBetween>
      <Note1Grey {...titleProps}>{title}</Note1Grey>
      {rederMetrics}
    </div>
  );
};

export default InsightsStrategy;
