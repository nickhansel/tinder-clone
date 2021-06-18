/*
  Reusable component to provide layout for header with an action
  Takes header title and array of action names
*/
import React from 'react';
import PropTypes from 'prop-types';

import { Tooltip, Popconfirm } from 'antd';

import { SubH2, SpaceBetween, Flex } from 'common';
import { iconEdit, iconTrash, iconAddCircle, iconCheckmark } from 'media/svg';
import { alertWithOffset } from 'utils';

const ActionHeader = ({
  title,
  actions,
  id,
  toggleSpinning = () => {},
  headerIcon
}) => {
  const actionsMap = {
    edit: {
      name: 'edit',
      icon: iconEdit,
      hasConfirm: false,
    },
    add: {
      name: 'add',
      icon: iconAddCircle,
      hasConfirm: false,
    },
    delete: {
      name: 'delete',
      icon: iconTrash,
      hasConfirm: true,
    },
    resolve: {
      name: 'resolve',
      icon: iconCheckmark,
      hasConfirm: true,
    }
  };

  const confirmWrap = (actionIcon, item, key) => {
    const { 
      action,
      confirmData, 
      cancelData, 
      onConfirm, 
      onCancel,
      processing ,
      resolveTitle
    } = item;

    const confirmAction = () => {
      action(id, confirmData);
      toggleSpinning(false);

      alertWithOffset(
        processing,
        onConfirm,
      );
    };
    const cancelAction = () => {
      action(id, cancelData);
      toggleSpinning(false);
      
      alertWithOffset(
        processing,
        onCancel,
      );
    };

    return (
      <Popconfirm
        key={key}
        title={resolveTitle}
        onConfirm={confirmAction}
        onCancel={cancelAction}
        okText="Ok"
        cancelText="Cancel"
      >
        {actionIcon}
      </Popconfirm>
    );
  };

  // Map actions to components
  const renderActions = actions.map((item, key) => {
    const { name, icon, hasConfirm } = actionsMap[item.name];
    
    let actionIcon = (
      <Tooltip key={key}
        title={name}>
        <img
          style={{ cursor: 'pointer', maxWidth: 50 }}
          src={icon}
          alt={name}
          onClick={() => toggleSpinning(true)}
        />
      </Tooltip> 
    );

    if (hasConfirm) {
      actionIcon = confirmWrap(actionIcon, item, key);
    }

    return actionIcon;
  });

  return (
    <div style={{paddingRight: 20}}>
      <SpaceBetween>
        <Flex>
          {headerIcon}
          <SubH2>{title}</SubH2>
        </Flex>
        <Flex>
          {renderActions}
        </Flex>
      </SpaceBetween>
    </div>
  );
};

ActionHeader.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.array,
  id: PropTypes.string,
  toggleSpinning: PropTypes.func,
  headerIcon: PropTypes.object,
};

export default ActionHeader;
