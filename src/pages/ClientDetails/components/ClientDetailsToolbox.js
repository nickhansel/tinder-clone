/*
   Toolbox
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'antd';
import { SubH2, Note2 } from 'common';
import {
  iconBug,
  iconCustom,
  iconAttention,
  iconNewContact,
  iconEscalate,
  iconNewFeature,
} from 'media/svg';
import { STRATEGIES } from 'utils';

const { ATTENTION, BUG, CONTACT, FEATURE, CUSTOM, ESCALATION } = STRATEGIES;

const ClientDetailsToolbox = ({ handleToggle, setSelectedStrategy }) => {
  const handleOnDragFinish = (name) => {
    setSelectedStrategy(name);
    handleToggle();
  };

  // Styles
  const iconStyle = {
    height: 48,
    fill: '#ffff',
    margin: 8,
    width: 48,
  };
  const iconContainerStyle = {
    fontSize: 12,
    textAlign: 'center',
    verticalAlign: 'middle',
    width: 'max-content',
  };
  const renderActionIcon = (name, icon, title) => (
    <Col>
      <div onClick={() => handleOnDragFinish(name)}
        style={iconContainerStyle}>
        <img src={icon}
          style={iconStyle}
          alt="" />
        <Note2>{title}</Note2>
      </div>
    </Col>
  );

  return (
    <div>
      <SubH2>Toolbox</SubH2>
      <div className="details-tools">
        {renderActionIcon('attention', iconAttention, ATTENTION)}
        {renderActionIcon('bug', iconBug, BUG)}
        {renderActionIcon('contact', iconNewContact, CONTACT)}
        {renderActionIcon('escalation', iconEscalate, ESCALATION)}
        {renderActionIcon('feature', iconNewFeature, FEATURE)}
        {renderActionIcon('custom', iconCustom, CUSTOM)}
      </div>
    </div>
  );
};

ClientDetailsToolbox.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  setSelectedStrategy: PropTypes.func.isRequired,
};

export default ClientDetailsToolbox;
