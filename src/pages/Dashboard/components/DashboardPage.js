/*
   Dashboard Page 
 */

import React, { useState } from "react";
import { Pagination } from "antd";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { listClients } from "graphql/queries";
import DashboardClientList from "./DashboardClientsList";
import MoodFilter from "./DashboardMoodFilter";
import { Layout, Note2, Flex } from "common";
import { YellowBox } from "./styles";
import { DASHBOARD_TITLE, NUM_EACH_PAGE } from "../constants";
import "./styles.css";
import { mockData, filterDataByMood, CURRENT_USER } from "utils";

const DashboardPage = ({ history }) => {
  const { loading, data, error } = useQuery(
    gql(listClients, {
      variables: {
        filter: {
          contactId: "ut001",
        },
      },
    })
  );

  const [moodId, setMoodId] = useState("all");
  const [clientsData, setClientData] = useState(filterDataByMood(mockData));
  const [page, setPage] = useState(1);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(NUM_EACH_PAGE);

  console.log("2222");
  console.log(data);

  const moodFilter = (
    <MoodFilter
      setClientData={setClientData}
      setMoodId={setMoodId}
      clientsData={clientsData}
    />
  );

  const onChange = (page) => {
    // Pagination
    setPage(page);
    setMinVal((page - 1) * NUM_EACH_PAGE);
    setMaxVal(page * NUM_EACH_PAGE);
  };

  const cardListProps = {
    data: clientsData,
    history,
    minVal,
    maxVal,
  };
  const paginationProps = {
    current: page,
    defaultCurrent: 1,
    onChange: onChange,
    pageSize: 8,
    showTotal: (total) => <Note2>Total {clientsData.length} clients</Note2>,
    total: clientsData.length,
  };

  return (
    <Layout title={DASHBOARD_TITLE} extra={moodFilter}>
      <Flex style={{ justifyContent: "flex-end" }}>
        <Pagination style={{ marginLeft: 20 }} {...paginationProps} />
      </Flex>
      <YellowBox>
        <div></div>
      </YellowBox>
      <DashboardClientList {...cardListProps} />
    </Layout>
  );
};

export default DashboardPage;
