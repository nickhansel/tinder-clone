/*
   Settings Page
 */
import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Row, Tabs, Col, Avatar, Tooltip, Divider, Input } from "antd";
import {
  Layout,
  Note1,
  Note1Grey,
  SubH2,
  CardWrap,
  Flex,
  SpaceBetween,
  ButtonStyled,
  Text,
} from "common";
import { iconBack, iconAddCircle, iconEdit } from "media/svg";
import { UserOutlined } from "@ant-design/icons";
import "./styles.css";
var jsforce = require('jsforce');

const domain ='https://empava-dev-ed.my.salesforce.com'
const callbackUrl ='https://www.empava-dev.com/api/callback'
const consumerKey ='3MVG9kBt168mda__pzQ.aoD3KEYm00tt_pgtML_t97zFkkLW2qWIDlsK5Esa9BMDtyvKk55XtChBtVAso7M1A'
const consumerSecret ='BDA201F244D0B67341126518D5258C758BBFD1AEC94347DD4687506AEF877E41'

var conn = new jsforce.Connection({
  oauth2 : {
    // you can change loginUrl to connect to sandbox or prerelease env.
    clientId: consumerKey,
    clientSecret: consumerSecret,
    redirectUri: callbackUrl,
  },
  instanceUrl: domain,
});

const { TabPane } = Tabs;

// const oauth2 = new jsforce.OAuth2({
// 	loginUrl: domain,
// 	clientId: consumerKey,
// 	clientSecret: consumerSecret,
// 	redirectUri: callbackUrl
// });

const SettingsPage = () => {
  const [userData, setUserData] = useState("");
  const [salesRecords, setSalesRecords] = useState([]);
  // Get currect user from the aws auth 
  useEffect(() => {
    conn.login('asiya@empava.io', 'Martines87!m3JxX75mgvqcaJgkiZUCVZdwQ', function(err, userInfo) {
      if (err) { return console.error(err); }
      // Now you can get the access token and instance URL information.
      // Save them to establish connection next time.
      console.log(conn.accessToken);
      console.log(conn.instanceUrl);
      // logged in user property
      console.log(userInfo);
      console.log("User ID: " + userInfo.id);
      console.log("Org ID: " + userInfo.organizationId);
      // ...
    });

    conn.query("SELECT Id, Name FROM Account", function(err, result) {
      if (err) { return console.error(err); }
      console.log("total : " + result.totalSize);
      console.log("fetched : " + result.records.length);
      setSalesRecords(result.records)
    });

    Auth.currentUserInfo()
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => console.log("error: ", err));
  }, []);

  // Props
  const layoutProps = {
    title: "Profile",
    prefix: <img src={iconBack} alt="" />,
  };
  const rowProps = {
    justify: "center",
  };

  const infoRow = (name, data) => {
    return (
      <Flex style={{ marginTop: "15px" }}>
        <Note1Grey style={{ marginRight: "15px" }}>{name}</Note1Grey>
        <Note1>{data}</Note1>
      </Flex>
    );
  };

  let display = [];

  salesRecords.forEach((record) => {
    display.push(record.Name);
  })

  const renderList  =  (
    <div>
      {display.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </div>
  )

  return (
    <Layout {...layoutProps}>
      {" "}
      <Row {...rowProps}>
        <Col span={12}>
          <CardWrap className="details-card settings-profile">
            <SpaceBetween>
              <SubH2>Basic Info</SubH2>
              <Tooltip title="Edit BasicInfo">
                <img
                  style={{ cursor: "pointer" }}
                  src={iconEdit}
                  alt="edit basic infi"
                />
              </Tooltip>
            </SpaceBetween>
            <Flex>
              <Avatar size="large" icon={<UserOutlined />} />
              <div>
                {infoRow("Username:", userData.username)}
                {infoRow(
                  "Email:",
                  userData.attributes ? userData.attributes.email : ""
                )}
              </div>
            </Flex>
          </CardWrap>
        </Col>
        <Col span={12}>
          <CardWrap height={320} className="details-card settings-team">
            <SpaceBetween>
              <SubH2>Team Members</SubH2>
              <Tooltip title="Add Team Member">
                <img
                  style={{ cursor: "pointer" }}
                  src={iconAddCircle}
                  alt="add team member"
                />
              </Tooltip>
            </SpaceBetween>
          </CardWrap>
        </Col>
      </Row>
      <Row {...rowProps}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Company Info" key="1">
            <Col span={24}>
              <CardWrap className="details-card settings-info">
                <SpaceBetween>
                  <SubH2>Company Name</SubH2>
                  <Tooltip title="Edit Company Info">
                    <img
                      style={{ cursor: "pointer" }}
                      src={iconEdit}
                      alt="edit company info"
                    />
                  </Tooltip>
                </SpaceBetween>
                <Note1>Name</Note1>
                <Divider />
                <SubH2>Company Address</SubH2>
                <Note1>Address</Note1>
                <Divider />
                <SubH2>Connect Salesforce</SubH2>
                <Note1Grey>(Enter your API key)</Note1Grey>
                <div style={{ marginBottom: "20px", width: "450px" }}>
                  <Input />
                </div>
                <ButtonStyled>Confirm</ButtonStyled>
              </CardWrap>
            </Col>
          </TabPane>
          <TabPane tab="Settings" key="2">
            <Col span={24}>
              <CardWrap className="details-card settings-info">
              <SubH2>Salesforce Accounts</SubH2>
                  {renderList}
              </CardWrap>
            </Col>
          </TabPane>
          <TabPane tab="Payment" key="3">
            <Col span={24}>
              <CardWrap className="details-card settings-info">
                Content of Tab Pane 3
              </CardWrap>
            </Col>
          </TabPane>
        </Tabs>
      </Row>
    </Layout>
  );
};

export default SettingsPage;
