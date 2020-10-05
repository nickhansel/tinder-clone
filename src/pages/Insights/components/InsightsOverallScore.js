import React from "react";
import { SubH1, SubH2, SpaceBetween, Flex } from "common";
import { ButtonCharts } from "./styles";

const data = { "2017-01-01": 11, "2017-01-02": 6 };

const InsightsOverallScore = () => {
  const total = 54;
  const average = 4.14;

  const chartProps = {
    data,
  };

  return (
    <div>
      <SpaceBetween>
        <div>
          <SubH1>Overall Client Health Score</SubH1>
          <SubH2>Total Clients: {total}</SubH2>
          <SubH2>Average Score: {average}</SubH2>
        </div>
        <Flex>
          <ButtonCharts>Quater</ButtonCharts>
          <ButtonCharts>Year</ButtonCharts>
        </Flex>
      </SpaceBetween>
    </div>
  );
};

export default InsightsOverallScore;
