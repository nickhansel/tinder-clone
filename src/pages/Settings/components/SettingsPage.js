/*
   Settings Page
 */
import React, { useState, useEffect } from "react";
import { Row, Tabs, Col, Avatar } from "antd";
import {
  Layout,
  ActionHeader,
  SubH2,
  Note1Grey,
  CardWrap,
  Flex,
} from "common";
import { iconBack } from "media/svg";
import { UserOutlined } from "@ant-design/icons";
import ConnectionForm from './ConnectionForm';
import { TabLayout, InfoRow } from'./layouts';
import useCurrentUser from '../../../customHooks/useCurrentUser';
import "./styles.css";

const jsforce = require('jsforce');
const { TabPane } = Tabs;

const SettingsPage = () => {
  const userData = useCurrentUser();
  const [salesRecords, setSalesRecords] = useState([]);
  const sfConnected = userData.team ? Boolean(userData.team.sfKey) : false;

  useEffect(() => {
    if (sfConnected) {
      const { sfUsername, sfKey } = userData.team;

      // Salesforce connection test
      var conn = new jsforce.Connection();
      conn.login(sfUsername, sfKey, function(err, userInfo) {
        if (err) { return console.error(err); }
        conn.query("SELECT Id, Name, CreatedDate FROM Contact", function(err, result) {
          if (err) { return console.error(err); }
          setSalesRecords(result.records)
        });
      });
    }
  }, [userData]);

  // Props
  const layoutProps = {
    title: "Profile",
    prefix: <img src={iconBack} alt="" />,
  };
  const rowProps = {
    justify: "center",
  };

  // Tabs configs - TODO: move to separate comoponents when expand
  const connectionContent = (
    <>
      <ActionHeader title="Salesforce Connection" actions={["edit"]} />
      {userData.id && !sfConnected  ? <ConnectionForm user={userData} /> : <Note1Grey>Connection created</Note1Grey>}
    </>
  )
  const configsContent = (
    <>
      <SubH2>Salesforce Accounts</SubH2>
    </>
  )

  // Props for the tabs
  const settingsTabsProps = [
    {
      tabName: "Company Info",
      tabNumber: "1",
      spanSize: 24,
      content: connectionContent,
    },
    {
      tabName: "Configurations",
      tabNumber: "2",
      spanSize: 24,
      content: configsContent,
    },
    {
      tabName: "Payment",
      tabNumber: "3",
      spanSize: 24,
      content: 'Content of Tab Pane 3',
    },
  ]
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
          <TabPane tab={item.tabName} key={item.tabNumber}>
            <TabLayout {...tabProps} key={key} />
          </TabPane>
        );
        })}
    </Tabs>
  );

  return (
    <Layout {...layoutProps}>
      <Row {...rowProps}>
        <Col span={12}>
          <CardWrap className="details-card settings-profile">
            <ActionHeader title="Basic Info" actions={["edit"]} />
            <Flex>
              <Avatar size="large" icon={<UserOutlined />} />
              <div>
                <InfoRow name="Username:" data={userData.name} />
                <InfoRow name="Email:" data={userData.email} />
                <InfoRow name="Team:" data={userData.team ? userData.team.name : 'Not created'} />
              </div>
            </Flex>
          </CardWrap>
        </Col>
        <Col span={12}>
          <CardWrap height={320} className="details-card settings-team">
            <ActionHeader title="Add Team Member" actions={["add"]} />
          </CardWrap>
        </Col>
      </Row>
      <Row {...rowProps}>
        {renderSettingsTabs}
      </Row>
    </Layout>
  );
};

export default SettingsPage;
