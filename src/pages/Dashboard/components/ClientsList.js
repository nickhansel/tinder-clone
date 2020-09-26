/*
  Client List component
 */

import React from "react";
import { Row } from "antd";
import CardItem from "./CardItem";

const ClientList = ({ data, minVal, maxVal, history }) => {
  return (
    <div>
      <Row justify="center">
        {data &&
          data.length > 0 &&
          data
            .slice(minVal, maxVal)
            .map((client, index) => (
              <CardItem key={index} {...client} history={history} />
            ))}
      </Row>
    </div>
  );
};

export default ClientList;
