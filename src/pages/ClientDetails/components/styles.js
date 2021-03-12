/*
  styled components
 */

import styled from "styled-components";
import { Row } from "antd";

export const ClientProfileStyled = styled.div`
  display: flex;
  height: 320px;
  width: 544px;
`;

export const AvatarContainer = styled.div`
  border-radius: 8px;
  min-width: 180px;

  img {
    min-height: 350px;
  }
`;

export const RowPagination = styled(Row)`
  margin-top: 10px;
  justify-content: space-between;
`;