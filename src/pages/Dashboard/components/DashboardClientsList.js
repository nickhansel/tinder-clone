/*
  Client List component
 */

import React from "react";
import { Row } from "antd";
import { ClientCard } from "common";
import { mockMoods } from "utils/mock";

const DashboardClientList = ({ data, minVal, maxVal, history }) => {
  const handleCardClick = (clientId) => {
    history.push(`client/${clientId}`);
  };

  return (
    <div>
      <Row justify="center">
        {data &&
          data.length > 0 &&
          data
            .slice(minVal, maxVal)
            .map((client, index) => (
              <ClientCard key={index} action={handleCardClick} {...client} />
            ))}
      </Row>
    </div>
  );
};

export default DashboardClientList;
