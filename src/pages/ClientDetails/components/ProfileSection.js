/*
   ProfileSection
 */

import React from "react";
import { DividerStyled, SpaceBetween } from "common";

const ProfileSection = ({ header, content, extra }) => {
  const renderContent = (
    <>
      {content.map((item) => {
        return item;
      })}
    </>
  );

  return (
    <div style={{ marginTop: 10 }}>
      <SpaceBetween>
        {header}
        {extra}
      </SpaceBetween>
      <div>{renderContent}</div>
    </div>
  );
};

export default ProfileSection;
