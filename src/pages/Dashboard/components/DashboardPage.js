/*
   Dashboard Page 
 */

import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { listClientsDash } from "graphql/queries";
import { Pagination } from "antd";
import DashboardClientList from "./DashboardClientList";
import MoodFilter from "./DashboardMoodFilter";
import { Layout, Note2, Flex, Note2Grey, Loading } from "common";
import { DASHBOARD_TITLE, NUM_EACH_PAGE } from "../constants";
import { filterDataByMood, CURRENT_USER } from "utils";
import { iconFilter, iconSort, iconCalendar } from "media/svg";
import "./styles.css";

const DashboardPage = ({ history }) => {
  const [moodId, setMoodId] = useState("all");
  const [filtering, setFiltering] = useState(false);
  const [page, setPage] = useState(1);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(NUM_EACH_PAGE);
  const [username, setUser] = useState("");

  useEffect(() => {
    Auth.currentUserInfo()
      .then((data) => {
        setUser(data.username);
      })
      .catch((err) => console.log("error: ", err));
  }, []);

  const { loading, data, error } = useQuery(gql(listClientsDash), {
    filter: {
      contactId: CURRENT_USER,
    },
  });

  if (loading) {
    return (
      <Layout>
        <div style={{ marginTop: 200 }}>
          <Loading />
        </div>
      </Layout>
    );
  }

  const isLoaded = !loading && !error;
  const clientsData = isLoaded // TODO change to API filtering
    ? filterDataByMood(data.listClients.items, moodId)
    : [];
  const totalClients = clientsData.length;

  const moodFilter = (
    <MoodFilter setMoodId={setMoodId} setFiltering={setFiltering} />
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
    showTotal: (total) => <Note2>Total {totalClients} clients</Note2>,
    total: totalClients,
  };

  const renderClients = filtering ? (
    <div style={{ marginTop: 200 }}>
      <Loading />
    </div>
  ) : (
    <DashboardClientList {...cardListProps} />
  );

  return (
    <Layout title={DASHBOARD_TITLE} extra={moodFilter}>
      <Flex style={{ justifyContent: "space-between" }}>
        <Flex style={{ width: 375, justifyContent: "space-evenly" }}>
          <Flex>
            <img src={iconCalendar} alt="" />
            <Note2Grey>Renewal Date</Note2Grey>
          </Flex>
          <Flex>
            <img src={iconSort} alt="" />
            <Note2Grey>Sort By</Note2Grey>
          </Flex>
          <Flex>
            <img src={iconFilter} alt="" />
            <Note2Grey>Filters</Note2Grey>
          </Flex>
        </Flex>
        <Pagination style={{ marginLeft: 20 }} {...paginationProps} />
      </Flex>
      {renderClients}
    </Layout>
  );
};

export default DashboardPage;
