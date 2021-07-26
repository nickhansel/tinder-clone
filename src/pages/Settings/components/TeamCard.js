/*
  Team Card Page
*/
import React from 'react';
import { Tooltip } from 'antd';
import {
  SubH2,
  CardWrap,
  SpaceBetween
} from 'common';
import { iconAddCircle } from 'media/svg';
import SettingsNewTeamMember from './SettingsNewTeamMember';
import './styles.css';

const TeamCard = ({
  setStateAddTeamMember,
  stateAddTeamMember
}) => {
  // TODO: Add team members logic to settings
  const renderAddTeamMember = stateAddTeamMember ? (
    <CardWrap height={320}
      className='details-card settings-team'>
      <SpaceBetween>
        <SubH2>Existing Team Members</SubH2>
        <Tooltip title='Add Team Member'>
          <img
            onClick={() => setStateAddTeamMember(false)}
            style={{ cursor: 'pointer' }}
            src={iconAddCircle}
          />
        </Tooltip>
      </SpaceBetween>
    </CardWrap>
  ) : (
    <CardWrap height={320}
      className='details-card settings-team'>
      <SpaceBetween>
        <SubH2>Add Team Member</SubH2>
      </SpaceBetween>
      <SettingsNewTeamMember handleToggle={setStateAddTeamMember}/>
    </CardWrap>
  );

  return renderAddTeamMember;
};

export default TeamCard;
