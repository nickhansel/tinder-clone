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

export const StyledProfileCard = styled.div`
  border-radius: 8px;
  background-color: #ffff;
  margin: 8px;
  padding: 15px;
`;

export const RowPagination = styled(Row)`
  margin-left: 8px;
  width: 1140px;
  justify-content: space-between;

  .ant-pagination {
    padding-top: 20px;
  }
`;
