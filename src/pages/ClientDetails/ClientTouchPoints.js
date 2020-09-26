/*
   Client Touch Points
 */

import React from "react";
import { Title } from "components";

const ClientTouchPoints = ({ name }) => {
  const renderPoint = (
    <div>
      <h4>3/19/20 1:34 PM by <span style={{ color: '#052F7B' }}>{name}</span></h4>
      <p>Lorem ipsum dolor sit amet, consect s adipiscing elit, sed dos eat oaset read.</p>
    </div>
  )
  return (
    <div>
      <Title>Latest Touch Points</Title>
      {renderPoint}
      {renderPoint}
      {renderPoint}
    </div>
  );
};

export default ClientTouchPoints;
