/*
   Insights Page 
 */

import React from "react";
import { Row } from "antd";
import InsightsOverallScore from "./InsightsOverallScore";
import InsightsMood from "./InsightsMood";
import InsightsQuater from "./InsightsQuater";
import InsightsStrategy from "./InsightsStrategy";
import { Layout, ClientCard, CardContainer, Note1, Flex } from "common";
import { mockData, clientNames } from "utils";
import { PAGE_TITLE } from "../constants";
import { iconUpSmile, iconDownSmile } from "media/svg";
import iconRed from "media/images/icon-red.png";
import iconSmile from "media/svg/icon-smile.svg";

const InsightsPage = () => {
  const clientTop = mockData[0];
  const clientLow = mockData[3];

  const layoutProps = {
    title: PAGE_TITLE,
  };

  return (
    <Layout {...layoutProps}>
      <Row justify="center">
        <CardContainer mode="xxl" width={560}>
          <InsightsOverallScore />
        </CardContainer>
        <div>
          <Flex>
            <div
              style={{
                backgroundColor: "green",
                width: 24,
                height: 24,
                padding: 2,
              }}
            >
              {" "}
              <img style={{ verticalAlign: "top" }} src={iconSmile} alt="" />
            </div>
            <Note1>Client with Highest Score</Note1>
          </Flex>
          <ClientCard {...clientTop} />
        </div>
        <div>
          <Flex>
            <img src={iconRed} alt="" />
            <Note1>Client with Lowest Score</Note1>
          </Flex>
          <ClientCard {...clientLow} />
        </div>
      </Row>
      <Row justify="center">
        <CardContainer mode="xl" width={312}>
          <InsightsStrategy />
        </CardContainer>
        <CardContainer mode="xl" width={376}>
          <InsightsMood clients={clientNames} />
        </CardContainer>
        <CardContainer mode="md" width={400}>
          <InsightsQuater />
        </CardContainer>
      </Row>
    </Layout>
  );
};

export default InsightsPage;
