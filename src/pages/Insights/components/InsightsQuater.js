import React from "react";
import { Progress } from "antd";
import { Text, SubH2, SpaceBetween } from "common";
import { mainColors } from "utils";

const quaterMetrics = [
  {
    name: "Clients Renewed",
    score: 14,
  },
  {
    name: "Clients Lost",
    score: 2,
  },
  {
    name: "New Clients Added",
    score: 8,
  },
  {
    name: "Open Renewals This Quater",
    score: 4,
  },
];

const InsightsQuater = ({ clients }) => {
  const renderMoodList = quaterMetrics.map((metric) => (
    <div style={{ paddingBottom: 20 }}>
      <SpaceBetween>
        <Text>{metric.name}</Text>
        <Text>{metric.score}</Text>
      </SpaceBetween>
      <Progress
        showInfo={false}
        strokeWidth={12}
        strokeColor="#20CDAE"
        percent={20}
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
    <div>
      <SubH2 {...titleProps}>Quater Metrics</SubH2>
      {renderMoodList}
    </div>
  );
};

export default InsightsQuater;
