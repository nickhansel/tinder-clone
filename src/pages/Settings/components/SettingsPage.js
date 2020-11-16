/*
   Settings Page
 */
import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import { Row, Tabs, Col, Avatar, Tooltip, Divider } from "antd";
import {
  Layout,
  Note1,
  Note1Grey,
  SubH2,
  CardWrap,
  Flex,
  SpaceBetween,
} from "common";
import { iconBack, iconAddCircle, iconEdit } from "media/svg";
import { UserOutlined } from "@ant-design/icons";
import "./styles.css";

const { TabPane } = Tabs;

const SettingsPage = () => {
  const [userData, setUserData] = useState("");

  useEffect(() => {
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
              </CardWrap>
            </Col>
          </TabPane>
          <TabPane tab="Settings" key="2">
            <Col span={24}>
              <CardWrap className="details-card settings-info">
                Content of Tab Pane 1
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
