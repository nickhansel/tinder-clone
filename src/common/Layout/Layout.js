/*
  Layout component
 */

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import JSignOut from "../../auth/SignOut";
import { SearchInput, SubH1, Profile, Flex } from "common";
import {
  ContentContainer,
  IconStyled,
  HeaderStyled,
  HeaderActions,
} from "./styles";
import { BASE_URLS } from "utils";
import { iconPulse, iconGear, iconPerson, iconLogo } from "media/svg";
import "./styles.css";

import { Layout as AntLayout, Menu } from "antd";

const { Sider } = AntLayout;

const Layout = ({ prefix, children, title, extra = null }) => {
  const [collapsed, setCollapsed] = useState(true);
  let history = useHistory();

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const handleMenuItemClick = (url) => {
    history.push(`/${url}`);
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
            onClick={() => handleMenuItemClick(BASE_URLS.DASHBOARD)}
            icon={<IconStyled src={iconPerson} alt="logo dashboard" />}
          >
            Dashboard
          </Menu.Item>
          <Menu.Item
            key="2"
            onClick={() => handleMenuItemClick(BASE_URLS.INSIGHTS)} // TODO uncomment when the views are ready
            icon={<IconStyled src={iconPulse} alt="logo insights" />}
          >
            Insights
          </Menu.Item>
          <Menu.Item
            key="3"
            // onClick={() => handleMenuItemClick(BASE_URLS.SETTIGNS)}
            icon={<IconStyled src={iconGear} alt="logo settings" />}
          >
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
      <AntLayout className="site-layout">
        <HeaderStyled>
          <Flex>
            <span
              onClick={() => handleMenuItemClick(BASE_URLS.DASHBOARD)}
              style={{ lineHeight: 2.8, paddingRight: 10 }}
            >
              {prefix}
            </span>
            <SubH1 style={{ lineHeight: 2 }}>{title}</SubH1>
          </Flex>
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

export default Layout;
