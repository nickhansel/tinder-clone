/*
   Client Touch Points
 */

import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Typography } from "antd";
import { SubH2, Note1Grey, Flex, DividerStyled } from "common";
import ClientDetailsPointsModal from "./ClientDetailsPointsModal";
import { togglePointsModal } from "../reducers/clientDetailsSlice";
import { iconMail } from "media/svg";

const { Paragraph } = Typography;

const ClientTouchPoints = ({ authorName, touchPoints }) => {
  const dispatch = useDispatch();

  const styleAuthor = {
    color: "#115CE5",
  };
  const paragraphProps = {
    ellipsis: { rows: 2, expandable: true, symbol: "more" },
  };
  const renderTouchPoints = (
    <>
      {touchPoints.map((point) => {
        return (
          <>
            <Flex>
              <img src={iconMail} alt="icon mail last touch points" />
              <Note1Grey style={{ padding: "0px 8px" }}>
                {point.createdAt} by{" "}
              </Note1Grey>
              <span style={{ ...styleAuthor }}>{authorName}</span>
            </Flex>
            <Paragraph {...paragraphProps}>{point.text}</Paragraph>
          </>
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
          onClick={() => dispatch(togglePointsModal(true))}
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
        handleToggle={() => dispatch(togglePointsModal(false))}
        content={renderTouchPoints}
      />
    </div>
  );
};

ClientTouchPoints.propTypes = {
  authorName: PropTypes.string.isRequired,
  touchPoints: PropTypes.array.isRequired,
};

export default ClientTouchPoints;
