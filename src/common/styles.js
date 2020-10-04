/*
   styled components for shared components 
 */

import styled, { css } from "styled-components";
import { Divider } from "antd";
import { mainColors } from "utils";

const sharedButtonStyles = css`
  border: none;
  outline: none;
  padding: 0;
`;

export const Flex = styled.div`
  display: flex;
`;

export const SpaceBetween = styled(Flex)`
  justify-content: space-between;
`;

export const AvatarStyled = styled.div`
  background-color: #ebebeb;
  border-radius: 8px;
  width: 225px;
  overflow: hidden;

  img {
    border-radius: 8px;
    display: block;
    height: 300px;
    object-fit: cover;
  }
`;

export const BudgeStyled = styled.button`
  ${sharedButtonStyles};
  background-color: ${mainColors.white};
  border-radius: 50%;
  margin-right: 10px;

  img {
    height: 32px;
    width: 32px;
  }
`;

export const ClientCardStyled = styled.div`
  background-color: ${mainColors.white};
  height: 420px;
  margin: 10px;
  padding: 15px;
  width: 264px;
`;

export const ButtonHealthStyled = styled.button`
  ${sharedButtonStyles};
  border-radius: 4px;
  color: ${mainColors.white};
  display: inline-block;
  font-size: 12px;
  height: 32px;
  width: 64px;

  img {
    display: inline-block;
    padding-right: 12px;
    vertical-align: middle;
  }
  :focus {
    outline: none;
  }
`;

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DividerStyled = styled(Divider)`
  margin: 10px 0;
`;

export const SearchInputStyled = styled.div`
  .ant-input-affix-wrapper {
    border-radius: 40px;
    height: 40px;
    line-height: 10;
    width: 180px;
  }
`;
