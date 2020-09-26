/*
   styled components for Layout
 */

import styled from "styled-components";
import { slateGrey } from "utils";
import { Layout } from "antd";

export const ContentContainer = styled(Layout.Content)`
  background-color: ${slateGrey};
`;

export const IconStyled = styled.img`
  height: 32px;
  margin-right: 22px;
  width: 32px;
`;
