import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import {
  iconBug,
  iconAttention,
  iconEscalate,
  iconNewContact,
  iconNewFeature,
  iconCustom,
  iconAdd,
} from 'media/svg';
import { BudgeStyled } from './styles';
import { capitalizeFirstLetter } from 'utils';

const statusData = {
  attention: iconAttention,
  bug: iconBug,
  escalation: iconEscalate,
  contact: iconNewContact,
  feature: iconNewFeature,
  custom: iconCustom,
  add: iconAdd,
};

const Badge = ({ strategy, size }) => {
  let dimentions = 32;

  if (size === 'lrg') {
    dimentions = 50;
  }

  const style = {
    height: dimentions,
    width: dimentions,
  };

  return (
    <BudgeStyled style={style}>
      <Tooltip title={capitalizeFirstLetter(strategy)}>
        <img src={statusData[strategy]}
          alt="health score" />
      </Tooltip>
    </BudgeStyled>
  );
};

Badge.propTypes = {
  strategy: PropTypes.string.isRequired,
  size: PropTypes.string
};

export default Badge;
