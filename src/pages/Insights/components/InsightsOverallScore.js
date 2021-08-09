/*
* Insights Overall Score component
* contains a chart illustrating client health scores by year/month
*/
import React, { useEffect } from 'react';
import { Chart } from 'chart.js';
import { SubH1, BoldStyled, SpaceBetween, Flex } from 'common';
import { ButtonCharts } from './styles';
import { getAvg } from 'utils';

const InsightsOverallScore = ({ overallData = [], totalClients }) => {
  const healthScores = [];

  // get the health scores from the API call and push to the new array
  overallData.forEach((element) => {
    healthScores.push(parseFloat(element.accountId.healthScore));
  });

  // get average of the health scores to display
  const average = getAvg(healthScores);

  const data = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
    ],
    datasets: [
      {
        label: '',
        borderColor: '#20CDAE',
        data: healthScores,
      },
    ],
  };

  useEffect(() => {
    // Initalize chart when components mounted
    const ctx = document.getElementById('lineChart');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        legend: {
          display: false,
        },
      },
    });
  });

  return (
    <div>
      <SpaceBetween>
        <div>
          <SubH1>Overall Clients Health Score</SubH1>
          <BoldStyled>Total Clients: {totalClients}</BoldStyled>
          <br />
          <BoldStyled>Average Score: {average}.0</BoldStyled>
        </div>
        <Flex>
          <ButtonCharts>Quarter</ButtonCharts>
          <ButtonCharts
            style={{ border: '1px solid #BDBDBD', color: '#BDBDBD' }}>
						Year
          </ButtonCharts>
        </Flex>
      </SpaceBetween>
      <div style={{ marginTop: 40 }}>
        <canvas id='lineChart'></canvas>
      </div>
    </div>
  );
};

export default InsightsOverallScore;