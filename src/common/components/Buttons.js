/*
  header styled components
 */

import styled from "styled-components";
import { Button } from "antd";

import { mainColors, fonts, typeScaleSm, weightScale } from "utils";

export const ButtonStyled = styled(Button)`
  border-radius: 8px;
  font-size: ${typeScaleSm.text};
  font-family: ${fonts.roboto};
  font-weight: ${weightScale.medium};
  height: 40px;
  width: 120px;
`;

export const ButtonConfirm = styled(ButtonStyled)`
  background-color: ${mainColors.blue};
  color: ${mainColors.white};
  margin-left: 10px;
`;

export const ButtonCancel = styled(ButtonStyled)`
  background-color: ${mainColors.white};
  border: 1px solid ${mainColors.blue};
  color: ${mainColors.blue};
`;
