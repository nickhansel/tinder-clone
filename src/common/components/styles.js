/*
  styled components for shared components 
*/

import styled, { css } from 'styled-components';
import { Divider } from 'antd';
import { mainColors, weightScale } from 'utils';

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

export const SpaceEnd = styled(Flex)`
  justify-content: flex-end;
`;

export const AvatarStyled = styled.div`
  background-color: #ebebeb;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 5px;

  img {
    border-radius: 8px;
    display: block;
    height: 300px;
    object-fit: cover;
  }
`;

export const BadgeStyled = styled.button`
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
  border-radius: .571em;
  margin: 1.07em .571em .71em;
  padding: 1.05em;
  width: 17,3972%;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.008), 0 12.5px 10px rgba(0, 0, 0, 0.02),
    0 5px 10px rgba(0, 0, 0, 0.042);
`;

export const BoldStyled = styled.span`
  color: ${mainColors.blue};
  font-weight: ${weightScale.bold};
`;

export const StyledCardContainer = styled.div`
  border-radius: 8px;
  background-color: #ffff;
  margin: 8px;
  padding: 15px;
`;

export const ButtonHealthStyled = styled.button`
  ${sharedButtonStyles};
  border-radius: 4px;
  color: ${mainColors.white};
  display: inline-block;
  font-size: 12px;
  padding-right: 5px;
  height: 32px;
  width: 64px;

  img {
    display: inline-block;
    padding-right: 12px;
    padding-bottom: 3px;
    vertical-align: middle;
  }
  :focus {
    outline: none;
  }
`;

export const ContainerFlex = styled.div`
  display: flex;
  padding-top: 7px;
  justify-content: space-between;
`;

export const DividerStyled = styled(Divider)`
  margin: 10px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;
