/*
   styled components for Layout
 */

import styled from "styled-components";
import { slateGrey, mainColors } from "utils";
import { Layout } from "antd";

const { Header } = Layout;

export const ContentContainer = styled(Layout.Content)`
  background-color: ${slateGrey};
  min-width: 1180px;
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
  padding: 15px 15px 15px 24px;
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
