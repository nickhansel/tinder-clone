import React from 'react';
import { Progress } from 'antd';
import { Text, SubH2, SpaceBetween } from 'common';
import { mainColors } from 'utils';

const quaterMetrics = [
  {
    name: 'Clients Renewed',
    score: 14,
    percent: 60,
  },
  {
    name: 'Clients Lost',
    score: 2,
    percent: 8,
  },
  {
    name: 'New Clients Added',
    score: 8,
    percent: 35,
  },
  {
    name: 'Open Renewals This Quater',
    score: 4,
    percent: 15,
  },
];

const InsightsQuater = ({ clients }) => {
  const renderMoodList = quaterMetrics.map((metric, index) => (
    <div key={index}
      style={{ paddingBottom: 20 }}>
      <SpaceBetween>
        <Text>{metric.name}</Text>
        <Text>{metric.score}</Text>
      </SpaceBetween>
      <Progress
        showInfo={false}
        strokeWidth={12}
        strokeColor="#20CDAE"
        percent={metric.percent}
      />
    </div>
  ));

  // Props
  const titleProps = {
    style: {
      paddingBottom: 24,
    },
  };

  return (
    <div style={{}}>
      <SubH2 {...titleProps}>Quater Metrics</SubH2>
      {renderMoodList}
    </div>
  );
};

export default InsightsQuater;
