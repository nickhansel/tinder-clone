/*
   Dashboard Page 
 */

import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import CardItem from "./CardItem";
import MoodFilter from "./MoodFilter";
import "./Dashboard.css";
import { mockData } from "utils/mock";
import { Layout } from "common";
import { DASHBOARD_TITLE } from "../constants";

const DashboardPage = ({ history }) => {
  const [filteredData, setMoodAction] = useState(mockData);
  const moodFilter = <MoodFilter setMoodAction={setMoodAction} />;

  const renderCards = () => {
    return (
      <div>
        <div className="wrapper">
          <div className="cards_wrap">
            {filteredData.map((client, index) => {
              return <CardItem key={index} {...client} history={history} />;
            })}
          </div>
        </div>
      </div>
    );
  };

  // Render table
  return (
    <Layout title={DASHBOARD_TITLE} extra={moodFilter}>
      <div> {renderCards()}</div>
    </Layout>
  );
};

export default withRouter(DashboardPage);
