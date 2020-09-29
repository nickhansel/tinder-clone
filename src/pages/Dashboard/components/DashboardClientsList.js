/*
  Client List component
 */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row } from "antd";
import { ClientCard } from "common";
import DashboardClientModal from "./DashboardClientModal";
import { selectBadgeModal, selectClient } from "../selectors";
import {
  toggleBadgeModal,
  setSelectedClient,
} from "../reducers/dashboardSlice";

const DashboardClientList = ({ data, minVal, maxVal, history }) => {
  const dispatch = useDispatch();

  const handleCardClick = (clientId) => {
    history.push(`clients/${clientId}`);
  };
  const handleToggle = (state, id) => {
    dispatch(toggleBadgeModal(state));
    dispatch(setSelectedClient(id));
  };

  return (
    <>
      <Row justify="center">
        {data &&
          data.length > 0 &&
          data
            .slice(minVal, maxVal)
            .map((client, index) => (
              <ClientCard
                key={index}
                {...client}
                cardAction={handleCardClick}
                infoAction={handleToggle}
              />
            ))}
      </Row>
      <DashboardClientModal handleToggle={handleToggle} />
    </>
  );
};

export default DashboardClientList;
