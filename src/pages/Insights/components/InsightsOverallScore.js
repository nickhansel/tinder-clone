import React, { useState, useEffect } from 'react';
import { Chart } from 'chart.js';
import { SubH1, BoldStyled, SpaceBetween, Flex } from 'common';
import { ButtonCharts } from './styles';
import { getAvg } from 'utils';

// Mock data
const healthScores = [
  4.5,
  5,
  2,
  2.4,
  2.4,
  4.5,
  5,
  3,
  4.3,
  4.9,
  1.9,
  3.1,
  3.2,
  4.2,
  4.2,
];
const average = getAvg(healthScores);
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: '',
      borderColor: '#20CDAE',
      data: healthScores,
    },
  ],
};

const InsightsOverallScore = () => {
  const total = 17;

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
          <BoldStyled>Total Clients: {total}</BoldStyled>
          <br />
          <BoldStyled>Average Score: {average}.0</BoldStyled>
        </div>
        <Flex>
          <ButtonCharts>Quater</ButtonCharts>
          <ButtonCharts
            style={{ border: '1px solid #BDBDBD', color: '#BDBDBD' }}
          >
            Year
          </ButtonCharts>
        </Flex>
      </SpaceBetween>
      <div style={{ marginTop: 40 }}>
        <canvas id="lineChart"></canvas>
      </div>
    </div>
  );
};

export default InsightsOverallScore;
