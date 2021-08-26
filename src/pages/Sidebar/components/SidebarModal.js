/*
  Sidebar component - displays all data for notes, strategies and todos
  ( at the moment only notes present ) 
 */

import React, { useState } from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { listStrategys, listClientNotes } from 'graphql/queries';

import { Layout, Collapse } from 'antd';

import Strategies from 'pages/sharedComponents/Strategies';
import Notes from 'pages/sharedComponents/Notes';

import './styles.css';
  
const { Sider } = Layout;
const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const SidebarModal = () => {
  const [collapsedTodo, setCollapsedTodo] = useState(true);

  const { data: strategiesData, loading } = useQuery(gql(listStrategys));
  const strategies = strategiesData ? strategiesData.listStrategys.items : [];

  const { data: notesData, loading: loadingNotes } = useQuery(gql(listClientNotes));
  const notes = notesData ? notesData.listClientNotes.items : [];

  return (
    <Sider
      collapsible
      className="todos-sidebar"
      collapsedWidth={0}
      width={400}
      zeroWidthTriggerStyle={{ right: 35, top: '50%', background: 'rgb(32 205 174)' }}
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
          <div className="sidebar__container">
            <Notes
              data={notes}
              loading={loadingNotes} />
          </div>
        </Panel>
      </Collapse>,
    </Sider>
  );
};
  
export default SidebarModal;
  