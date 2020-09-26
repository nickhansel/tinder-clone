/*
   Dashboard Page 
 */

import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Pagination } from "antd";
import ClientsList from "./ClientsList";
import MoodFilter from "./MoodFilter";
import { mockData } from "utils/mock";
import { Layout } from "common";
import { DASHBOARD_TITLE } from "../constants";
import "./Dashboard.css";

const numEachPage = 8;

const DashboardPage = ({ history }) => {
  const [filteredData, setMoodAction] = useState(mockData);
  const [page, setPage] = useState(1);
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(8);

  const moodFilter = <MoodFilter setMoodAction={setMoodAction} />;

  const onChange = (page) => {
    // Pagination
    setPage(page);
    setMinVal((page - 1) * numEachPage);
    setMaxVal(page * numEachPage);
  };

  const cardListProps = {
    minVal,
    maxVal,
    data: filteredData,
  };
  const paginationProps = {
    current: page,
    defaultCurrent: 1,
    onChange: onChange,
    pageSize: 8,
    showTotal: (total) => `Total ${filteredData.length} clients`,
    total: filteredData.length,
  };

  return (
    <Layout title={DASHBOARD_TITLE} extra={moodFilter}>
      <ClientsList {...cardListProps} />
      <Pagination {...paginationProps} />
    </Layout>
  );
};

export default withRouter(DashboardPage);
