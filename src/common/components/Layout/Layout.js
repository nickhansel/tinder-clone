/*
  Layout component
 */

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import JSignOut from "../../../auth/SignOut";
import { SearchInput, SubH1, Profile, Flex } from "common";
import {
  ContentContainer,
  IconStyled,
  HeaderStyled,
  HeaderActions,
  StyledTopHeader,
} from "./styles";
import { BASE_URLS } from "utils";
import { iconPulse, iconGear, iconPerson, iconLogo } from "media/svg";
import "./styles.css";

import { Layout as AntLayout, Menu } from "antd";

const { Sider } = AntLayout;
const { Item } = Menu;

const Layout = ({ prefix, children, title, extra = null }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [selectedItem, setSelectedItem] = useState("dashboard")
  let history = useHistory();

  useEffect(()=> {
    const {pathname} = history.location;
    setSelectedItem(pathname.substring(1))
  }, [history])

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const handleMenuItemClick = (url) => {
    history.push(`/${url}`);
  };

  const renderIconGear = <IconStyled src={iconGear} alt="logo settings" />;
  const renderIconPulse = (
    <IconStyled
      src={iconPulse}
      alt="logo insights"
    />
  );
  const renderIconPerson = (
    <IconStyled
      src={iconPerson}
      alt="logo dashboard"
    />
  );
    console.log(selectedItem)
  return (
    <AntLayout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo-side-bar">
          <img src={iconLogo} onClick={() => toggle()} alt="logo side bar" />
        </div>
        <Menu
          theme="dark" 
          mode="inline"
          selectable={true}
          onClick={(item) => handleMenuItemClick(item.key)}
          onSelect={(key) => setSelectedItem(key)}
          inlineCollapsed={true}
          selectedKeys={[selectedItem]}
          defaultSelectedKeys={["dashboard"]}>
          <Item
            key="dashboard"
            icon={renderIconPerson}>
            Dashboard
          </Item>
          <Item
            key="insights"
            icon={renderIconPulse}>
            Insights
          </Item>
          <Item key="settings" icon={renderIconGear}>
            Settings
          </Item>
        </Menu>
      </Sider>
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
