/*
  Sidebar component - displays all data for notes, strategies and todos
  ( at the moment only notes present ) 
 */

import React, { useState } from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { listStrategys } from 'graphql/queries';

import moment from 'moment';
import { Layout, Collapse } from 'antd';

import Strategies from 'pages/sharedComponents/Client/Strategies';
import { Badge } from 'common';
import './styles.css';
  
const { Sider } = Layout;
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const SidebarModal = () => {
  const [collapsedTodo, setCollapsedTodo] = useState(true);

  // get user from out db
  const { data: strategiesData, loading } = useQuery(gql(listStrategys));
  const strategies = strategiesData ? strategiesData.listStrategys.items : [];

  return (
    <Sider
      collapsible
      className="todos-sidebar"
      collapsedWidth={0}
      width={400}
      zeroWidthTriggerStyle={{ right: 35, top: '50%', background: '#e5dc699c' }}
      onCollapse={ () => setCollapsedTodo(!collapsedTodo)}
      collapsed={collapsedTodo}>
      <Collapse
        onChange={callback}>
        <Panel header="Strategies"
          key="1">
          <div className="sidebar__container">
            <Strategies
              data={strategies}
              loading={loading} />
          </div>
        </Panel>
        <Panel header="Notes"
          key="2">
          <p>notes</p>
        </Panel>
        <Panel header="Todo"
          key="3">
          <p>todo</p>
        </Panel>
      </Collapse>,
    </Sider>
  );
};
  
export default SidebarModal;
  