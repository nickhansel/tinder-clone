import React from "react";
import { Progress } from "antd";
import { Note1Grey, Note1, SubH2, Flex, SpaceBetween, Badge } from "common";
import { BADGES, mainColors } from "utils";

const InsightsStrategy = () => {
  // TODO add db data
  const currentBadges = [
    {
      name: BADGES.ATTENTION,
      title: "Attention",
      score: 13,
    },
    {
      name: BADGES.CONTACT,
      title: "New Contact",
      score: 10,
    },
    {
      name: BADGES.FEATURE,
      title: "New Feature",
      score: 5,
    },
    {
      name: BADGES.BUG,
      title: "Bug",
      score: 6,
    },
    {
      name: BADGES.ESCALATION,
      title: "Escalation",
      score: 2,
    },
    {
      name: BADGES.CUSTOM,
      title: "Custom",
      score: 6,
    },
  ];

  const lineProps = {
    style: {
      lineHeight: "12px",
      marginBottom: 4,
    },
  };

  const rederMetrics = currentBadges.map((badge) => (
    <SpaceBetween style={{ paddingBottom: 20 }}>
      <Flex style={{ width: 260 }}>
        <Badge strategy={badge.name} />
        <div style={{ width: "100%" }}>
          <Note1 {...lineProps}>{badge.title}</Note1>
          <Progress
            showInfo={false}
            strokeWidth={12}
            strokeColor={mainColors.brightBlue}
            percent={50}
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
      <SubH2>Strategy Based Metrica</SubH2>
      <Note1Grey {...titleProps}>Badges currently assigned</Note1Grey>
      {rederMetrics}
    </div>
  );
};

export default InsightsStrategy;
