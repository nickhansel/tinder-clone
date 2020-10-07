/*
   styled components for Layout
 */

import styled from "styled-components";
import { slateGrey, mainColors } from "utils";
import { Layout, Divider } from "antd";

const { Header, Sider } = Layout;

export const ContentContainer = styled(Layout.Content)`
  background-color: ${slateGrey};
  padding: 20px;
`;

export const IconStyled = styled.img`
  height: 32px;
  margin-right: 22px;
  width: 32px;
`;

export const HeaderStyled = styled(Header)`
  background-color: ${mainColors.white};
  display: flex;
  justify-content: space-between;
  min-width: 480px;
  padding: 14px 24px;
`;

export const HeaderActions = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 60px;
  width: 300px;

  .ant-input-affix-wrapper {
    border-radius: 50px;
    margint-right: 30px;
    width: 220px;
  }
`;

export const StyledDivider = styled(Divider)`
  margin: 0;
`;

export const StyledSider = styled(Sider)`
  @media (max-width: 400px) {
    display: none;
  }
`;
export const StyledTopHeader = styled(Header)`
  background-color: #0e3860;
  display: none;
  padding: 15px 30px 0;
  justify-content: flex-end;

  img {
    margin-right: 8px;
  }

  @media (max-width: 400px) {
    display: flex;
  }
`;
