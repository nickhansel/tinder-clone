/*
   Dashboard Page 
 */

import React, { useState } from "react";
import { Pagination } from "antd";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { listClientsDash } from "graphql/queries";
import DashboardClientList from "./DashboardClientList";
import MoodFilter from "./DashboardMoodFilter";
import { Layout, Note2, Flex } from "common";
import { YellowBox } from "./styles";
import { DASHBOARD_TITLE, NUM_EACH_PAGE } from "../constants";
import "./styles.css";
import { mockData, filterDataByMood, CURRENT_USER } from "utils";

const DashboardPage = ({ history }) => {
  const { loading, data, error } = useQuery(gql(listClientsDash), {
    filter: {
      contactId: CURRENT_USER,
    },
  });

  const isLoaded = !loading && !error;
  const clientsData = isLoaded ? data.listClients.items : [];
  const totalClients = clientsData.length;
  const [moodId, setMoodId] = useState("all");
  const [page, setPage] = useState(1);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(NUM_EACH_PAGE);

  const moodFilter = <MoodFilter setMoodId={setMoodId} data={[]} />;

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
    showTotal: (total) => <Note2>Total {totalClients} clients</Note2>,
    total: totalClients,
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
