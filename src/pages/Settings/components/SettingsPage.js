/*
  Settings Page
*/
import React, { useState } from 'react';
import useCurrentUser from '../../../customHooks/useCurrentUser';
import { Row, Tabs, Col, Avatar, Tooltip } from 'antd';
import {
  ActionHeader,
  SubH2,
  CardWrap,
  Flex,
  SpaceBetween
} from 'common';
import { iconBack, iconAddCircle } from 'media/svg';
import avatar from 'media/images/profile.png';
import SettingsNewTeamMember from './SettingsNewTeamMember';
import ConnectionCard from './ConnectionCard';
import Layout from 'pages/Layout';
import { TabLayout, InfoRow } from './layouts';
import './styles.css';

const { TabPane } = Tabs;

const SettingsPage = () => {
  // TODO: Add team members logic
  // const [stateAddTeamMember, setStateAddTeamMember] = useState(true);

  const userData = useCurrentUser();
  console.log("userData.team");
  console.log(userData);
  const sfConnected = userData.team &&  userData.team.sfKey ? Boolean(userData.team.sfKey) : false;

  // Props
  const layoutProps = {
    title: 'Profile',
    prefix: <img src={iconBack}
      alt="" />,
  };
  const rowProps = {
    justify: 'center',
  };

  // TODO: change to actuall action
  function temporaryAction() {
    console.log('action');
  }
  const headerActions = [
    {
      name: 'edit',
      action: temporaryAction,
      processing: temporaryAction,
    },
  ];

  const configsContent = (
    <SubH2>Salesforce Accounts</SubH2>
  );

  // Props for the tabs
  const settingsTabsProps = [
    {
      tabName: 'Company Info',
      tabNumber: '1',
      spanSize: 24,
      content: (
        <ConnectionCard
          sfConnected={sfConnected}
          userData={userData}  />
      ),
    },
    {
      tabName: 'Configurations',
      tabNumber: '2',
      spanSize: 24,
      content: configsContent,
    },
    {
      tabName: 'Payment',
      tabNumber: '3',
      spanSize: 24,
      content: 'Content of Tab Pane 3',
    },
  ];

  // Map props to tab layout
  const renderSettingsTabs = (
    <Tabs defaultActiveKey="1">
      {settingsTabsProps.map((item, key) => {
        const tabProps = {
          content: item.content,
          spanSize: item.spanSize,
          tabName: item.tabName,
        };
        return (
          <TabPane tab={item.tabName}
            key={item.tabNumber}>
            <TabLayout {...tabProps}
              key={key} />
          </TabPane>
        );
      })}
    </Tabs>
  );

  const renderActivityCard = (
    <CardWrap height={320}
      className='details-card'>
      <SpaceBetween>
        <SubH2>Last Activity</SubH2>
      </SpaceBetween>
    </CardWrap>
  );
  console.log("userData")
  console.log(userData)
  return (
    <Layout {...layoutProps}>
      <Row {...rowProps}>
        <Col span={12}>
          <CardWrap className='details-card settings-profile'>
            <ActionHeader title='Basic Info'
              actions={headerActions} />
            <Flex>
              <Avatar size='large'
                src={avatar} />
              <div>
                <InfoRow name='Username:'
                  data={userData.name} />
                <InfoRow name='Email:'
                  data={userData.email} />
                <InfoRow
                  name='Team:'
                  data={userData.team ? userData.team.name : 'Not created'}
                />
              </div>
            </Flex>
          </CardWrap>
        </Col>
        <Col span={12}>{renderActivityCard}</Col>
      </Row>
      <Row {...rowProps}>{renderSettingsTabs}</Row>
    </Layout>
  );
};

export default SettingsPage;
