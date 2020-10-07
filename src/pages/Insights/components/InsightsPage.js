/*
   Insights Page 
 */

import React from "react";
import { Row } from "antd";
import InsightsOverallScore from "./InsightsOverallScore";
import InsightsMood from "./InsightsMood";
import InsightsQuater from "./InsightsQuater";
import InsightsStrategy from "./InsightsStrategy";
import { Layout, ClientCard, CardContainer, Flex, SubH2 } from "common";
import { StyledSmileIcon } from "./styles";
import { iconSmile, iconSmileDown } from "media/svg";
import { mockData, clientNames } from "utils";
import { PAGE_TITLE } from "../constants";

const InsightsPage = () => {
  const clientTop = mockData[0];
  const clientLow = mockData[3];

  const layoutProps = {
    title: PAGE_TITLE,
  };

  const renderCardHeader = (backgroundColor, icon, title) => {
    return (
      <Flex>
        <StyledSmileIcon style={{ backgroundColor }}>
          <img src={icon} alt={`icon ${title}`} />
        </StyledSmileIcon>
        <SubH2>{title}</SubH2>
      </Flex>
    );
  };

  const HigherScoreHeader = renderCardHeader(
    "#20CDAE",
    iconSmile,
    "Client with Highest Score"
  );
  const LowestScoreHeader = renderCardHeader(
    "#FD6A65",
    iconSmileDown,
    "Client with Lowest Score"
  );

  return (
    <Layout {...layoutProps}>
      <Row justify="center">
        <CardContainer style={{ minHeight: 300, minWidth: 300, width: 500 }}>
          <InsightsOverallScore />
        </CardContainer>
        <div style={{ marginBottom: 15 }}>
          {HigherScoreHeader}
          <ClientCard {...clientTop} />
        </div>
        <div style={{ marginBottom: 15 }}>
          {LowestScoreHeader}
          <ClientCard {...clientLow} />
        </div>
        <CardContainer height={440} width={312}>
          <InsightsStrategy />
        </CardContainer>
        <CardContainer height={440} width={376}>
          <InsightsMood clients={clientNames} />
        </CardContainer>
        <CardContainer heigth={328} width={400}>
          <InsightsQuater />
        </CardContainer>
      </Row>
    </Layout>
  );
};

export default InsightsPage;
