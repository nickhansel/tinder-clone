/*
  CardItem component
 */

import React from "react";
import { Divider } from "antd";
import { ClientCard } from "common";
import { mockMoods } from "utils/mock";

const CardItem = ({
  id,
  name,
  position,
  company,
  activity,
  history,
  status,
}) => {
  const clientMood = mockMoods[status];

  const handleCardClick = (clientId) => {
    history.push(`client/${clientId}`);
  };

  return <ClientCard action={handleCardClick} />;
};

export default CardItem;
