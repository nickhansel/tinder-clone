import React from "react";
import { SubH1, SubH2, SpaceBetween, Flex } from "common";

const InsightsOverallScore = () => {
  const total = 54;
  const average = 4.14;

  return (
    <div>
      <SpaceBetween>
        <div>
          <SubH1>Overall Client Health Score</SubH1>
          <SubH2>Total Clients: {total}</SubH2>
          <SubH2>Average Score: {average}</SubH2>
        </div>
        <Flex>
          <button>Quater</button>
          <button>Year</button>
        </Flex>
      </SpaceBetween>
    </div>
  );
};

export default InsightsOverallScore;
