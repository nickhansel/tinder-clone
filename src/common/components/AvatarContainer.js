import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Popconfirm } from 'antd';
import { AvatarStyled } from './styles';
import { greyBg } from 'media/images';
import { iconStarMaker, iconCrown, iconNewMail } from 'media/svg';
import './Layout/styles.css';

const AvatarContainer = ({
  mood,
  mode = 'croped',
  isDecisionMaker,
  isChamp,
  isImpatient,
  id,
  updateClientIsDecisionMaker,
  clientName,
}) => {
  const size = {
    full: 289,
    croped: 249,
  };

  function confirmUpdate() {
    updateClientIsDecisionMaker(id, !isDecisionMaker);
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

  const decisionMakerIcon = isDecisionMaker ? (
    <Popconfirm
      title={`Remove ${clientName} as a Decision Maker?`}
      onConfirm={confirmUpdate}
      okText='Yes'
      cancelText='Cancel'>
      <Tooltip title='Decision Maker'
        placement='bottomLeft'>
        <img
          style={{
            height: 32,
            left: 188,
            position: 'absolute',
            top: isChamp ? 40 : 5,
            width: 32,
            filter: 'grayscale(0%)',
          }}
          className='decision-maker-badge'
          src={iconStarMaker}
          alt=''
        />
      </Tooltip>
    </Popconfirm>
  ) : (
    <Popconfirm
      title={`Make ${clientName} a Decision Maker?`}
      onConfirm={confirmUpdate}
      okText='Yes'
      cancelText='Cancel'>
      <Tooltip title='Decision Maker'
        placement='bottomLeft'>
        <img
          style={{
            height: 32,
            left: 188,
            position: 'absolute',
            top: isChamp ? 40 : 5,
            width: 32,
            filter: 'grayscale(100%)',
          }}
          className='decision-maker-badge'
          src={iconStarMaker}
          alt=''
        />
      </Tooltip>
    </Popconfirm>
  );
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
