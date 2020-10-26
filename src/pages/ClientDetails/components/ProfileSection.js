/*
   ProfileSection
 */

import React from "react";
import { SpaceBetween } from "common";

const ProfileSection = ({ header, content, extra }) => {
  const renderContent = (
    <>
      {content.map((item, index) => {
        return <span key={index}>{item}</span>;
      })}
    </>
  );

  return (
    <div style={{ marginTop: 10, width: "100%" }}>
      <SpaceBetween>
        {header}
        {extra}
      </SpaceBetween>
      <div>{renderContent}</div>
    </div>
  );
};

export default ProfileSection;
