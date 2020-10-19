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
  StyledSider,
  StyledTopHeader,
} from "./styles";
import { BASE_URLS } from "utils";
import { iconPulse, iconGear, iconPerson, iconLogo } from "media/svg";
import "./styles.css";

import { Layout as AntLayout, Menu } from "antd";

const Layout = ({ prefix, children, title, extra = null }) => {
  const [collapsed, setCollapsed] = useState(true);
  let history = useHistory();

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const handleMenuItemClick = (url) => {
    history.push(`/${url}`);
  };

  const renderIconGear = <IconStyled src={iconGear} alt="logo settings" />;
  const renderIconPulse = (
    <IconStyled
      onClick={() => handleMenuItemClick(BASE_URLS.INSIGHTS)} // TODO uncomment when the views are ready
      src={iconPulse}
      alt="logo insights"
    />
  );
  const renderIconPerson = (
    <IconStyled
      onClick={() => handleMenuItemClick(BASE_URLS.DASHBOARD)}
      src={iconPerson}
      alt="logo dashboard"
    />
  );

  return (
    <AntLayout>
      <StyledSider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo-side-bar">
          <img src={iconLogo} onClick={() => toggle()} alt="logo side bar" />
        </div>
        <Menu defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={renderIconPerson}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={renderIconPulse}>
            Insights
          </Menu.Item>
          <Menu.Item key="3" icon={renderIconGear}>
            Settings
          </Menu.Item>
        </Menu>
      </StyledSider>
      <AntLayout className="site-layout">
        <StyledTopHeader>
          {renderIconPerson}
          {renderIconPulse}
          {renderIconGear}
        </StyledTopHeader>
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
