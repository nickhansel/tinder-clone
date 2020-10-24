/*
   Client Dtail Card 
 */
import React from "react";
import { StyledCardContainer } from "./styles";
import "./styles.css";

const CardWrap = ({ children, height, className, style }) => {
  const containerProps = {
    style: {
      height,
      ...style,
    },
  };

  return (
    <StyledCardContainer className={className} {...containerProps}>
      {children}
    </StyledCardContainer>
  );
};

CardWrap.propTypes = {};

export default CardWrap;
