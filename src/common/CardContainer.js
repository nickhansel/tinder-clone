/*
   Client Dtail Card 
 */
import React from "react";
import PropTypes from "prop-types";
import { StyledCardContainer } from "./styles";
import "./styles.css";

const CardContainer = ({ children, height, width, style }) => {
  const containerProps = {
    style: {
      height,
      marginBottom: 24,
      width,
      ...style,
    },
  };

  return (
    <StyledCardContainer {...containerProps}>{children}</StyledCardContainer>
  );
};

CardContainer.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

export default CardContainer;
