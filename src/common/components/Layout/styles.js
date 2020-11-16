/*
   styled components for Layout
 */

import styled from "styled-components";
import { slateGrey, mainColors, LAYOUT_SIZES } from "utils";
import { Layout, Divider } from "antd";

const { MAX_CONTENT_WIDTH } = LAYOUT_SIZES;

const { Header } = Layout;

export const ContentContainer = styled(Layout.Content)`
  background-color: ${slateGrey};
  max-width: ${MAX_CONTENT_WIDTH}px;
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
  width: 450px;

  .ant-input-affix-wrapper {
    border-radius: 50px;
    margint-right: 30px;
    width: 220px;
  }
`;

export const StyledDivider = styled(Divider)`
  margin: 0;
`;

export const StyledTopHeader = styled(Header)`
  background-color: #0e3860;
  display: none;
  padding: 15px 30px 0;
  justify-content: flex-end;

  img {
    margin-right: 8px;
  }

  @media (max-width: 430px) {
    display: flex;
    width: 424px;
  }
`;

export const SearchInputStyled = styled.div`
  .ant-input-affix-wrapper {
    border-radius: 40px;
    height: 40px;
    line-height: 10;
    width: 180px;
  }

  @media (max-width: 430px) {
    display: none;
  }
`;
