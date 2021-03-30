/*
   Reusable component to provide layout for header with an action
   Takes header title and array of action names
 */
import React from 'react';
import { SubH2, SpaceBetween } from 'common';
import { Tooltip } from 'antd';
import { iconEdit, iconTrash, iconAddCircle } from 'media/svg';

const ActionHeader = ({ title, actions }) => {
  const actionLayout = ( title, name, icon, action ) => {
    return ( 
      <Tooltip title={`Edit ${title}`}>
        <img
          style={{ cursor: 'pointer' }}
          src={icon}
          alt={name}
          onClick={action}
        />
      </Tooltip> 
    );
  };

  const actionsMap = {
    edit: {
      name: 'edit',
      icon: iconEdit,
      action: () => { console.log('clicked edit');} // TODO add actions
    },
    add: {
      name: 'add',
      icon: iconAddCircle,
      action: () => { console.log('clicked edit');} // TODO add actions
    },
    delete: {
      name: 'delete',
      icon: iconTrash,
      action: () => { console.log('clicked delete');} // TODO add actions
    }
  };

  // Map actions to components
  const renderActions = actions.map((actionName, key) => {
    const { name, icon, action } = actionsMap[actionName];

    return ( 
      <Tooltip key={key}
        title={name}>
        <img
          style={{ cursor: 'pointer' }}
          src={icon}
          alt={name}
          onClick={action}
        />
      </Tooltip> 
    );
  });

  return (
    <SpaceBetween>
      <SubH2>{title}</SubH2>
      <div>
        {renderActions}
      </div>
    </SpaceBetween>
  );
};

export default ActionHeader;
