/*
   Client Touch Points
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Typography } from "antd";
import { SubH2, Note1Grey, Flex, DividerStyled } from "common";
import ClientDetailsPointsModal from "./ClientDetailsPointsModal";
import { iconMail } from "media/svg";

const { Paragraph } = Typography;

const ClientDetailsTouchPoints = ({ authorName, touchPoints }) => {
  const [isModalOpen, togglePointsModal] = useState(false);

  const styleAuthor = {
    color: "#115CE5",
  };
  const paragraphProps = {
    ellipsis: { rows: 2, expandable: true, symbol: "more" },
  };

  const renderTouchPoints = (
    <>
      {touchPoints.map((point, index) => {
        return (
          <span key={index}>
            <Flex>
              <img src={iconMail} alt="icon mail last touch points" />
              <Note1Grey style={{ padding: "0px 8px" }}>
                {point.createdAt} by{" "}
              </Note1Grey>
              <span style={{ ...styleAuthor }}>{authorName}</span>
            </Flex>
            <Paragraph {...paragraphProps}>{point.text}</Paragraph>
          </span>
        );
      })}
    </>
  );

  const actionWrapperStyle = {
    position: "absolute",
    bottom: 0,
  };
  const actionTextStyle = {
    margin: 0,
    color: "#14709F",
    cursor: "pointer",
  };
  const renderAction = (
    <div style={{ ...actionWrapperStyle }}>
      <DividerStyled style={{ width: 340 }} />
      <Flex style={{ justifyContent: "center" }}>
        <SubH2
          onClick={() => togglePointsModal(true)}
          style={{ ...actionTextStyle }}
        >
          View All
        </SubH2>
      </Flex>
    </div>
  );

  const wrapperStyle = {
    position: "relative",
    height: "100%",
  };
  const contentStyle = {
    overflow: "auto",
    height: 220,
  };

  return (
    <div style={{ ...wrapperStyle }}>
      <SubH2>Latest Touch Points</SubH2>
      <div style={{ ...contentStyle }}>{renderTouchPoints}</div>
      {renderAction}
      <ClientDetailsPointsModal
        isOpen={isModalOpen}
        handleToggle={() => togglePointsModal(false)}
        content={renderTouchPoints}
      />
    </div>
  );
};

ClientDetailsTouchPoints.propTypes = {
  authorName: PropTypes.string.isRequired,
  touchPoints: PropTypes.array.isRequired,
};

export default ClientDetailsTouchPoints;
