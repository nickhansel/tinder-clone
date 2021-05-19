/*
  Settings Page
*/
import React, { useState } from 'react';
import useCurrentUser from '../../../customHooks/useCurrentUser';
import { Row, Tabs, Col, Avatar, Tooltip } from 'antd';
import {
  ActionHeader,
  SubH2,
  Note1Grey,
  CardWrap,
  Flex,
  SpaceBetween
} from 'common';
import { iconBack, iconAddCircle } from 'media/svg';
import { UserOutlined } from '@ant-design/icons';
import ConnectionForm from './ConnectionForm';
import SettingsNewTeamMember from './SettingsNewTeamMember';
import SyncClients from './SyncClients';
import Layout from 'pages/Layout';
import { TabLayout, InfoRow } from './layouts';
import './styles.css';

const { TabPane } = Tabs;

const SettingsPage = () => {
  const [stateAddTeamMember, setStateAddTeamMember] = useState(true);

  const userData = useCurrentUser();
  const sfConnected = userData.team ? Boolean(userData.team.sfKey) : false;

  // Props
  const layoutProps = {
    title: 'Profile',
    prefix: <img src={iconBack}
      alt="" />,
  };
  const rowProps = {
    justify: 'center',
  };

  const connectionCreated = (
    <div>
      <Note1Grey>Connection created</Note1Grey>
      <Flex>You can Sync Clients now  -&gt; &nbsp;&nbsp;  
        <SyncClients userData={userData} />
      </Flex>
    </div>
  );

  // Tabs configs - TODO: move to separate comoponents when expand
  const connectionContent = (
    <>
      <ActionHeader title="Salesforce Connection"
        actions={['edit']} />
      {userData.id && !sfConnected  ? <ConnectionForm user={userData} /> : connectionCreated}
    </>
  );
  const configsContent = (
    <SubH2>Salesforce Accounts</SubH2>
  );

  // Props for the tabs
  const settingsTabsProps = [
    {
      tabName: 'Company Info',
      tabNumber: '1',
      spanSize: 24,
      content: connectionContent,
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

  const renderAddTeamMember = stateAddTeamMember ? (
    <CardWrap height={320}
      className='details-card settings-team'>
      <SpaceBetween>
        <SubH2>Existing Team Members</SubH2>
        <Tooltip title='Add Team Member'>
          <img
            onClick={() => setStateAddTeamMember(false)}
            style={{ cursor: 'pointer' }}
            src={iconAddCircle}
          />
        </Tooltip>
      </SpaceBetween>
    </CardWrap>
  ) : (
    <CardWrap height={320}
      className='details-card settings-team'>
      <SpaceBetween>
        <SubH2>Add Team Member</SubH2>
      </SpaceBetween>
      <SettingsNewTeamMember handleToggle={setStateAddTeamMember}/>
    </CardWrap>
  );

  return (
    <Layout {...layoutProps}>
      <Row {...rowProps}>
        <Col span={12}>
          <CardWrap className='details-card settings-profile'>
            <ActionHeader title='Basic Info'
              actions={['edit']} />
            <Flex>
              <Avatar size='large'
                icon={<UserOutlined />} />
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
        <Col span={12}>{renderAddTeamMember}</Col>
      </Row>
      <Row {...rowProps}>{renderSettingsTabs}</Row>
    </Layout>
  );
};

export default SettingsPage;
