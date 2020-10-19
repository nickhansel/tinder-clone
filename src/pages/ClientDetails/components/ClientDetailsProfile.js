/*
   Client Profile
 */

import React from "react";
import { useDrop } from "react-dnd";
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
} from "common";
import { mockMoods } from "utils/mock";
import { iconMenu } from "media/svg";

const ClientProfile = ({
  name,
  position,
  company,
  status,
  strategy,
  health,
  renewalDate,
  mood,
}) => {
  const clientMood = mockMoods[status]; // TODO change to real data
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "icon",
    drop: () => ({
      name: `Dustbin`,
      allowedDropEffect: "any",
    }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const isActive = canDrop && isOver;
  const renderBadges = strategy.map((strategyItem, index) => (
    <Badge key={index} strategy={strategyItem.name} />
  ));

  const sectionHeader = (
    <>
      <ProfileSection
        header={<Note1Grey>Renewal Date</Note1Grey>}
        content={[<Note1>{renewalDate}</Note1>]}
      />
      <Divider type="vertical" style={{ height: 56 }} />
      <ProfileSection
        header={<Note1Grey style={{ marginLeft: 20 }}>Contract</Note1Grey>}
        content={[<Note1 style={{ marginLeft: 14 }}>$100,00/year</Note1>]}
      />
    </>
  );

  const iconProps = {
    height: 24,
    width: 24,
  };

  return (
    <Row>
      <div ref={drop} style={{ opacity: isActive ? 0.5 : 1 }}>
        <AvatarContainer mood={clientMood} mode="full" />
      </div>
      <div className="details-profile-info">
        <ProfileSection
          header={<SubH1>{name}</SubH1>}
          content={[
            <Note1Grey>{position}</Note1Grey>,
            <Note2>{company}</Note2>,
          ]}
          extra={<img style={iconProps} src={iconMenu} alt="" />}
        />
        <DividerStyled />
        <HealthMeter healthScore={health} />
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
