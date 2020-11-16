import React from "react";
import { Menu, Dropdown } from "antd";
import { MenuUnfoldOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="/">Home</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="/">Fetures</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="/">Demo</a>
    </Menu.Item>
    <Menu.Item key="3">
      <a href="/">Contact</a>
    </Menu.Item>
  </Menu>
);

const NavDropdown = () => {
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <MenuUnfoldOutlined />
      </a>
    </Dropdown>
  );
};

export default NavDropdown;
