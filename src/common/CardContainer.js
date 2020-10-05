/*
   Client Dtail Card 
 */
import React from "react";
import { StyledCardContainer } from "./styles";
import "./styles.css";

const CardContainer = ({ children, mode, width }) => {
  const size = {
    xxl: 455,
    xl: 440,
    lrg: 320,
    md: 328,
    sm: 200,
  };

  return (
    <StyledCardContainer style={{ height: size[mode], width }}>
      {children}
    </StyledCardContainer>
  );
};

export default CardContainer;
