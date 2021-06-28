/*
  Reusable component to open an archive modal
*/
import React from 'react';
import PropTypes from 'prop-types';

import { Tooltip } from 'antd';
import { FolderOutlined } from '@ant-design/icons';

import { BadgeStyled } from './styles';

const ArchiveActionIcon = ({ onClick }) => {
  const style = {
    backgroundColor: '#ebebeb',
    cursor: 'pointer',
    height: 32,
    width: 32,
  };

  return (
    <BadgeStyled
      style={{...style}}
      onClick={onClick}>
      <Tooltip title='Archive'>
        <FolderOutlined alt='archive icon' />
      </Tooltip>
    </BadgeStyled>
  );
};

ArchiveActionIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ArchiveActionIcon;
