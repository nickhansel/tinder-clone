/*
   Dashboard Page 
 */

import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Pagination } from "antd";
import DashboardClientList from "./DashboardClientsList";
import MoodFilter from "./DashboardMoodFilter";
import { Layout, Note2 } from "common";
import { DASHBOARD_TITLE, NUM_EACH_PAGE } from "../constants";
import { selectFilteredClients } from "../selectors";
import "./styles.css";

const DashboardPage = ({ history }) => {
  const clientsData = useSelector(selectFilteredClients());
  const [page, setPage] = useState(1);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(NUM_EACH_PAGE);
  const moodFilter = <MoodFilter />;

  const onChange = (page) => {
    // Pagination
    setPage(page);
    setMinVal((page - 1) * NUM_EACH_PAGE);
    setMaxVal(page * NUM_EACH_PAGE);
  };

  const cardListProps = {
    minVal,
    maxVal,
    data: clientsData,
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
      <DashboardClientList {...cardListProps} />
      <Pagination style={{ marginLeft: 20 }} {...paginationProps} />
    </Layout>
  );
};

export default withRouter(DashboardPage);
