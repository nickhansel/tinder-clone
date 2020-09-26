/*
   ProfileSection
 */

import React from "react";
import { Divider } from "antd";
import { SubTitle } from "components";

const ProfileSection = ({ header, content, extra }) => {
  const renderContent = (
    <>
      {content.map((item) => {
        return <div>{item}</div>;
      })}
    </>
  );

  return (
    <div style={{ marginTop: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <SubTitle>{header}</SubTitle>
        {extra}
      </div>
      <div>{renderContent}</div>
      <Divider style={{ marginTop: 10 }} />
    </div>
  );
};

export default ProfileSection;
