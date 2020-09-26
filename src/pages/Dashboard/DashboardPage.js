/*
   Dashboard Page 
 */

import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import CardItem from "./CardItem";
import MoodFilter from "./MoodFilter";
import "./Dashboard.css";
import { mockData } from "utils/mock";
import { Layout } from "components";

const DashboardPage = ({ history }) => {
  const [filteredData, setMoodAction] = useState(mockData);

  const renderCards = () => {
    return (
      <div>
        <MoodFilter setMoodAction={setMoodAction} />
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
    <Layout>
      <div> {renderCards()}</div>
    </Layout>
  );
};

export default withRouter(DashboardPage);
