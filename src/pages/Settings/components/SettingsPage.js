/*
   Settings Page
 */
import React, { useState, useEffect } from "react";
import { Row, Tabs, Col, Avatar } from "antd";
import {
  Layout,
  ActionHeader,
  SubH2,
  CardWrap,
  Flex,
} from "common";
import { iconBack } from "media/svg";
import { UserOutlined } from "@ant-design/icons";
import ConnectionForm from './ConnectionForm';
import { TabLayout, InfoRow } from'./layouts';
import useCurrentUser from '../../../customHooks/useCurrentUser';
import "./styles.css";

var jsforce = require('jsforce');

const domain ='https://empava-dev-ed.my.salesforce.com'
const consumerKey ='3MVG9kBt168mda__pzQ.aoD3KEYm00tt_pgtML_t97zFkkLW2qWIDlsK5Esa9BMDtyvKk55XtChBtVAso7M1A'
const consumerSecret ='BDA201F244D0B67341126518D5258C758BBFD1AEC94347DD4687506AEF877E41'


const { TabPane } = Tabs;

const SettingsPage = () => {
  const userData = useCurrentUser();
  const [salesRecords, setSalesRecords] = useState([]);
  console.log(userData)

  // Get currect user from the aws auth 
  useEffect(() => {
    var conn = new jsforce.Connection({
      oauth2 : {
        // you can change loginUrl to connect to sandbox or prerelease env.
        clientId: consumerKey,
        clientSecret: consumerSecret,
      },
      instanceUrl: domain,
    });
    conn.login('asiya@empava.io', 'Redicecre19CXwVkKF5oc9SLsKd9ACCH8ja', function(err, userInfo) {
      if (err) { return console.error(err); }
      // Now you can get the access token and instance URL information.
      // Save them to establish connection next time.
      console.log(conn.accessToken);
      console.log(conn.instanceUrl);
      // logged in user property
      console.log(userInfo);
      console.log("User ID: " + userInfo.id);
      console.log("Org ID: " + userInfo.organizationId);
      conn.query("SELECT Id, Name, CreatedDate FROM Contact", function(err, result) {
        if (err) { return console.error(err); }
        console.log(result);
        setSalesRecords(result.records)
      });
    });
  }, []);

  // Debugging 
  console.log("salesRecords")
  console.log(salesRecords)

  // Props
  const layoutProps = {
    title: "Profile",
    prefix: <img src={iconBack} alt="" />,
  };
  const rowProps = {
    justify: "center",
  };

  // Tabs configs - TODO: move to separate comoponents ?
  const connectionContent = (
    <>
      <ActionHeader title="Salesforce Connection" actions={["edit"]} />
      <ConnectionForm />
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
          tabName: item.tabName,
          spanSize: item.spanSize,
          content: item.content,
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
                <InfoRow name={"Username:"} data={userData.name} />
                <InfoRow name={"Email:"} data={userData.email} />
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
