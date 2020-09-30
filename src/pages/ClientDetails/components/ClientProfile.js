/*
   Client Profile
 */

import React from "react";
import { Row, Divider } from "antd";
import HealthMeter from "./HealthMeter";
import ProfileSection from "./ProfileSection";
import {
  AvatarContainer,
  SubH1,
  Note1,
  Note2,
  Note1Grey,
  Badge,
  DividerStyled,
  SpaceBetween,
} from "common";
import { mockMoods } from "utils/mock";
import { iconMenu } from "media/svg";

const iconProps = {
  height: 24,
  width: 24,
};

const ClientProfile = ({ name, position, company, status, strategy }) => {
  const clientMood = mockMoods[status];
  const iconMenuImg = <img style={iconProps} src={iconMenu} alt="" />;
  const renderBadges = strategy.map((strategyItem) => (
    <Badge strategy={strategyItem} />
  ));

  const sectionHeader = (
    <>
      <ProfileSection
        header={<Note1Grey>Renewal Date</Note1Grey>}
        content={[<Note1>09/22/21</Note1>]}
      />
      <Divider type="vertical" style={{ height: 56 }} />
      <ProfileSection
        header={<Note1Grey style={{ marginLeft: 20 }}>Contract</Note1Grey>}
        content={[<Note1 style={{ marginLeft: 14 }}>$100,00/year</Note1>]}
      />
    </>
  );

  return (
    <Row>
      <AvatarContainer mode="full" />
      <div style={{ paddingLeft: 20 }}>
        <ProfileSection
          header={<SubH1>{name}</SubH1>}
          content={[
            <Note1Grey>{position}</Note1Grey>,
            <Note2>{company}</Note2>,
          ]}
          extra={iconMenuImg}
        />
        <DividerStyled />
        <HealthMeter />
        <Row>
          <ProfileSection header={sectionHeader} content={[]} />
        </Row>
        <DividerStyled />
        <Row>{renderBadges}</Row>
      </div>
    </Row>
  );
};

export default ClientProfile;
