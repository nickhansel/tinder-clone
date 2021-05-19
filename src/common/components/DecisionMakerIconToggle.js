import React from 'react';
import { Tooltip, Popconfirm } from 'antd';
import { iconStarMaker } from 'media/svg';
import '../../pages/Layout/styles.css';

const DecisionMakerIconToggle = ({ clientName, confirmUpdate, isChamp, isToggleOn }) => {
  const popConfirmTitle = isToggleOn ? `Remove ${clientName} as a Decision Maker?` : `Make ${clientName} a Decision Maker?`;
  const greyscale = isToggleOn ? 'grayscale(0%)' : 'grayscale(100%)';

  return (
    <Popconfirm
      title={popConfirmTitle}
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
            filter: greyscale,
            opacity: 0.7,
          }}
          className='decision-maker-badge-client-details-page'
          src={iconStarMaker}
          alt=''
        />
      </Tooltip>
    </Popconfirm>
  );
};

export default DecisionMakerIconToggle;