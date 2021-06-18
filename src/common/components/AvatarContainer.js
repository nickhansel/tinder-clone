import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import { AvatarStyled } from './styles';
import { greyBg } from 'media/images';
import { iconStarMaker, iconCrown, iconNewMail } from 'media/svg';
// import './Layout/styles.css';
import '../../pages/Layout/styles.css';
import DecisionMakerIconToggle from 'common/components/DecisionMakerIconToggle';

const AvatarContainer = ({
  clientName,
  fromClientDetails,
  handleUpdateClient,
  id,
  isDecisionMaker,
  isChamp,
  isImpatient,
  mood,
  mode = 'croped',
}) => {
  const size = {
    full: 289,
    croped: 249,
  };

  function confirmUpdate() {
    handleUpdateClient(id, { isDecisionMaker: !isDecisionMaker });
  }
  
  const newMailIcon = isImpatient ? (
    <Tooltip title='New Mail'
      placement='topLeft'>
      <img
        style={{
          height: 24,
          left: 180,
          top: 10,
          position: 'absolute',
          width: 24,
        }}
        src={iconNewMail}
        alt=''
      />
    </Tooltip>
  ) : null;

  const champIcon = isChamp ? (
    <Tooltip title='Champion'
      placement='topLeft'>
      <img
        style={{
          height: 32,
          left: 188,
          top: 5,
          position: 'absolute',
          width: 32,
        }}
        src={iconCrown}
        alt=''
      />
    </Tooltip>
  ) : null;

  const decisionMakerIcon = fromClientDetails ? (
    <DecisionMakerIconToggle
      clientName={clientName}
      confirmUpdate={confirmUpdate}
      isChamp={isChamp}
      isToggleOn={isDecisionMaker}
    />
  ) : isDecisionMaker ? (
    <Tooltip title='Decision Maker'
      placement='bottomLeft'>
      <img
        style={{
          filter: 'grayscale(0%)',
          height: 32,
          left: 188,
          opacity: 0.7,
          position: 'absolute',
          top: isChamp ? 40 : 5,
          width: 32,
        }}
        className='decision-maker-badge'
        src={iconStarMaker}
        alt=''
      />
    </Tooltip>
  ) : null;

  return (
    <AvatarStyled style={{ height: size[mode], width: 230 }}>
      <div style={{ position: 'relative' }}>
        {newMailIcon}
        {champIcon}
        {decisionMakerIcon}
      </div>
      <img src={mood || greyBg}
        alt='' />
    </AvatarStyled>
  );
};

AvatarContainer.propTypes = {
  mood: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
};

export default AvatarContainer;
