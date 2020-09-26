/*
  Layout component
 */

import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import JSignOut from "../../auth/SignOut";
import { getLocationName } from "utils";
import { Title } from "../Typography";
import { ContentContainer, IconStyled } from "./style";
import { iconPulse, iconGear, iconPerson, iconLogo } from "media/svg";
import "./Layout.css";

import { Layout as AntLayout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Header, Sider } = AntLayout;

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <AntLayout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo-side-bar">
          <img src={iconLogo} alt="logo side bar" />
        </div>
        <Menu defaultSelectedKeys={["1"]}>
          <Menu.Item
            key="1"
            icon={<IconStyled src={iconPerson} alt="logo dashboard" />}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<IconStyled src={iconPulse} alt="logo insights" />}
          >
            Insights
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<IconStyled src={iconGear} alt="logo settings" />}
          >
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
      <AntLayout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <ContentContainer>{children}</ContentContainer>
      </AntLayout>
    </AntLayout>
  );
};

export default withRouter(Layout);
