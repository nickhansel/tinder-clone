/*
  Layout component
 */

import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import JSignOut from "../../auth/SignOut";
import { SearchInput, SubH1, Profile } from "common";
import {
  ContentContainer,
  IconStyled,
  HeaderStyled,
  HeaderActions,
} from "./styles";
import { iconPulse, iconGear, iconPerson, iconLogo } from "media/svg";
import "./styles.css";

import { Layout as AntLayout, Menu } from "antd";

const { Sider } = AntLayout;

const Layout = ({ prefix, children, title, extra = null }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <AntLayout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo-side-bar">
          <img src={iconLogo} onClick={() => toggle()} alt="logo side bar" />
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
        <HeaderStyled>
          <SubH1>{title}</SubH1>
          <HeaderActions>
            <SearchInput />
            <Profile />
          </HeaderActions>
        </HeaderStyled>
        {extra}
        <ContentContainer>{children}</ContentContainer>
      </AntLayout>
    </AntLayout>
  );
};

export default withRouter(Layout);
