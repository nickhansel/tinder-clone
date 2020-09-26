/*
   Client Profile
 */

import React from "react";
import HealthMeter from "./HealthMeter";
import ProfileSection from "./ProfileSection";
import { AvatarContainer } from "./styles";
import { mockMoods } from 'utils/mock';
import { iconAttention } from "media/svg";

const iconProps = {
  height: 30,
  width: 30,
}

const ClientProfile = ({ name, position, company, status }) => {
  const clientMood = mockMoods[status];
  const toolIcons = <img style={iconProps} src={iconAttention} alt='' />

  return (
    <div style={{ display: "flex" }}>
      <AvatarContainer>
        <img src={require(`../../media/gifs/${clientMood || 'boy_happy.gif'}`)} alt="" />
      </AvatarContainer>
      <div>
        <ProfileSection header={name} content={[position, company]} extra={toolIcons}  />
        <HealthMeter />
        <ProfileSection header="Renewal Date" content={["09/22/21"]} />
        <ProfileSection header="Contract" content={["$100,00/year"]} />
      </div>
    </div>
  );
};

export default ClientProfile;
