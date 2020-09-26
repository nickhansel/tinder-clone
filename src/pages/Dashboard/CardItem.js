/*
  CardItem component
 */

import React from "react";
import { Divider } from "antd";
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

  return (
    <div className="card_item" onClick={() => handleCardClick(id)}>
      <div className="card_inner">
        <div className="card_avatar">
          <img
            src={require(`../../media/gifs/${clientMood || "boy_happy.gif"}`)}
            alt=""
          />
        </div>
        <div className="card_info">
          <div className="card_client_name">{name}</div>
          <div className="card_client_position">{position}</div>
          <div className="card_company">{company}</div>
          <Divider ariant="inset" />
          <div className="card_activity">{activity}</div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
