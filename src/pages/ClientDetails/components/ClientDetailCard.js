/*
   Client Dtail Card 
 */
import React from "react";
import { StyledProfileCard } from "./styles";
import "./styles.css";

const ClientDetailCard = ({ children, mode, width }) => {
  const size = {
    lrg: 320,
    md: 200,
  };

  return (
    <StyledProfileCard style={{ height: size[mode], width }}>
      {children}
    </StyledProfileCard>
  );
};

export default ClientDetailCard;
