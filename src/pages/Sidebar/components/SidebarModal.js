/*
  Layout component
 */

import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import moment from 'moment';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { listStrategys } from 'graphql/queries';
import { Badge } from 'common';

import { loggedInUserId, strategiesList } from '../../../cache.js';
import './styles.css';
  
const { Sider } = Layout;
  
const SidebarModal = () => {
  const [collapsedTodo, setCollapsedTodo] = useState(true);
  const userId = loggedInUserId();

  // get user from out db
  const { data } = useQuery(gql(listStrategys)
    // ,{ variables: {   TODO: update filter to use ownerId
    //   filter: {
    //     // ownerId: {
    //     //   eq: userId
    //     // }
    //   }
    // }}
  );
  const strategies = data ? data.listStrategys.items : [];

  const renderStrategiesList = strategies.map((item, index) => {
    const { badgeName, title, description, clientId, createdAt } = item;

    return (
      <div 
        className="todos__entry"
        key={index}>
        <Badge key={index}
          strategy={badgeName} />
        <b>{title} </b> : {description}
        <p><b>Client: </b>{clientId ? clientId.name : 'n/a'} <br/> Created at: {moment(createdAt).format('MM/D/YYYY hh:mm')}</p>
      </div>
    );
  });

  useEffect(() => {
    if (data && data.listStrategys) {
      strategiesList(data.listStrategys.items);
    }
  }, [data]);

  return (
    <Sider
      collapsible
      className="todos-sidebar"
      collapsedWidth={0}
      width={420}
      zeroWidthTriggerStyle={{ right: 25, top: '50%', background: '#e5dc699c' }}
      onCollapse={ () => setCollapsedTodo(!collapsedTodo)}
      collapsed={collapsedTodo}>
      <div className="todos__container">
        <h2>All Strategies</h2>
        {renderStrategiesList}
      </div>
    </Sider>
  );
};
  
export default SidebarModal;
  